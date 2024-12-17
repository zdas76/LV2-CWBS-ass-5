"use client";

import { Button, DatePicker, Modal } from "antd";
import { useState } from "react";
import { IService } from "../../../types/service.types";
import CForm from "../../form/CForm";
import { DefaultOptionType } from "antd/es/select";
import { FieldValues, SubmitHandler } from "react-hook-form";
import dayjs from "dayjs";
import {
  useGetAllSlotsQuery,
  useGetSlotsDateByIdQuery,
} from "../../../redux/features/slotsApi";
import CSelect from "../../form/CSelect";
import { TSlot } from "../../../types/Slots";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addToCart } from "../../../redux/features/bookingSlice";
import { toast } from "sonner";

export default function AddBookingModal({ service }: { service: IService }) {
  const [open, setOpen] = useState(false);
  const [selectDate, setSelectDate] = useState("");

  const { data } = useGetAllSlotsQuery({
    serviceId: service?._id,
    date: selectDate,
  });

  const { data: slotsDate } = useGetSlotsDateByIdQuery({
    serviceId: service?._id,
  });

  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.booking.carts);

  const availabeDate = [
    ...new Set(slotsDate?.data.map((item: { date: string }) => item.date)),
  ];
  const validDates = availabeDate.map((date) => dayjs(`${date}`));

  const disabledDate = (current: any) => {
    return !validDates.some((validDate) => current.isSame(validDate, "day"));
  };

  const options: DefaultOptionType["options"] = [];

  const availabeSlots = data?.data.filter(
    (item: TSlot) => !state.some((item2) => item._id === item2._id)
  );

  availabeSlots?.map((item: TSlot) => {
    options.push({
      value: item._id,
      label:
        dayjs(item.date).format("DD/MM/YYYY") +
        "  " +
        item.startTime +
        "-" +
        item.endTime,
    });
  });

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    const slot = data?.data.find((item: TSlot) => item._id === values.slotId);
    if (
      state.find((item) => (item.service.name as string) === slot.service.name)
    ) {
      throw toast.error("You are already add this service");
    }
    dispatch(addToCart(slot));
  };

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)} className="w-full">
        Add Booking
      </Button>
      <Modal
        title="Book a Service"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        width={500}
      >
        <div>
          <CForm
            onSubmit={onSubmit}
            // resolver={zodResolver(createBookignValidation)}
          >
            <p className="border py-2 px-3 rounded-lg mb-3">
              <span>Service Name :</span>
              <span className="font-bold uppercase ml-3">{service?.name}</span>
            </p>

            <DatePicker
              onChange={(date) =>
                setSelectDate(dayjs(date).format("YYYY-MM-DD"))
              }
              className="w-full my-3 p-2"
              disabledDate={disabledDate}
              size="large"
            />

            <CSelect
              options={options}
              name="slotId"
              label="Select Vehical Type"
              placeholder="Select one"
            />

            <Button type="primary" htmlType="submit">
              Booked
            </Button>
          </CForm>
        </div>
      </Modal>
    </div>
  );
}
