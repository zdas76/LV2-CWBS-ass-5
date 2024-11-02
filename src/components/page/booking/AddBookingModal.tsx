"use client";
import { Button, DatePicker, Modal } from "antd";
import { useState } from "react";
import { IService } from "../../../types/service.types";
import CForm from "../../form/CForm";
import { zodResolver } from "@hookform/resolvers/zod";
import CInput from "../../form/CInput";
import CSelect from "../../form/CSelect";
import { DefaultOptionType } from "antd/es/select";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { createBookignValidation } from "../../../Schemas/BookingSchema";
import CInputNumber from "../../form/CInputNumbet";
import dayjs from "dayjs";
import { useGetAllSlotsQuery } from "../../../redux/features/slotsApi";

export default function AddBookingModal({ service }: { service: IService }) {
  const [open, setOpen] = useState(false);

  const [selectDate, setSelectDate] = useState("");

  const {data}= useGetAllSlotsQuery({serviceId: service?._id, date: selectDate});
  console.log(data.data)

  const VehicleType = [
    "car",
    "suv",
    "van",
    "motorcycle",
    "bus",
    "electricVehicle",
    "hybridVehicle",
    "bicycle",
    "tractor",
  ];

  const options: DefaultOptionType["options"] = [];

  VehicleType.map((item) => {
    options.push({
      value: item,
      label: item,
    });
  });



  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
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
            resolver={zodResolver(createBookignValidation)}
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
              minDate={dayjs(new Date())}
              maxDate={dayjs().add(1, "month")}
              size="large"
            />

            <CSelect
              options={options}
              name="vehicleType"
              label="Select Vehical Type"
              placeholder="Select one"
            />
            <CInput name="vehicleBrand" type="text" label="Brand Name" />
            <CInput name="vehicleModel" type="text" label="Vehicle Model" />
            <CInputNumber name="manufacturingYear" label="Manufacturing Year" />
            <CInput
              name="registrationPlate"
              type="text"
              label="Registration Plate"
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
