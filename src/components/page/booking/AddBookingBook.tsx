"use client";

import { Button, DatePicker, Modal } from "antd";
import { useState } from "react";
import { IService } from "../../../types/service.types";
import CForm from "../../form/CForm";
import Select, { DefaultOptionType } from "antd/es/select";
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
import { useGetAllServiceQuery } from "../../../redux/features/serviceApi";

export default function AddBookingBook() {
  
  const [open, setOpen] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [selectService, setSelectService] = useState("");

  const { data: ServiceLit } = useGetAllServiceQuery([]);

  const { data } = useGetAllSlotsQuery({
    serviceId : selectService,
    date: selectDate,
  });

  const { data: slotsDate } = useGetSlotsDateByIdQuery({
    serviceId: selectService,
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

  const slotOptions: DefaultOptionType["options"] = [];

  const availabeSlots = data?.data.filter(
    (item: TSlot) => !state.some((item2) => item._id === item2._id)
  );

  availabeSlots?.map((item: TSlot) => {
    slotOptions.push({
      value: item._id,
      label:
        dayjs(item.date).format("DD/MM/YYYY") +
        "  " +
        item.startTime +
        "-" +
        item.endTime,
    });
  });

  const ServiceOptions: DefaultOptionType["options"] = [];
  ServiceLit?.data?.map((item: Partial<IService>) => {
    ServiceOptions.push({
      value: item._id,
      label: item.name as string,
    });
  });

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    const slot = data?.data.find((item: TSlot) => item._id === values.slotId);
    if (
      state.find((item) => (item.service.name as string) === slot.service.name)
    ) {
      throw toast.error("You are already add this service");
    }

    setSelectDate("")
    setSelectService("")
    dispatch(addToCart(slot));
   
  };

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)} className="w-full">
        Add Booking
      </Button>
      <Modal
        title="Add a Service"
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
            <Select
                options={ServiceOptions}
                placeholder="Select one"
                onChange={(serviceId)=> setSelectService(serviceId)}
                className="w-full"
                value={selectService}
                
              />

            <DatePicker
              onChange={(date) =>
                setSelectDate(dayjs(date).format("YYYY-MM-DD"))
              }
              className="w-full my-3 p-2"
              disabledDate={disabledDate}
              size="large"
              value={selectDate ? dayjs(selectDate) : ""}
            />

            <CSelect
              options={slotOptions}
              name="slotId"
              label="Select Vehical Type"
              placeholder="Select one"
            />

            <Button type="primary" htmlType="submit" >
              Booked
            </Button>
          </CForm>
          
        </div>
      </Modal>
    </div>
  );
}
