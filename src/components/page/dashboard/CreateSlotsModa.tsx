import React, { useState } from "react";
import { Button, Modal, SelectProps } from "antd";
import CForm from "../../form/CForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { addSlotsSchema } from "../../../Schemas/SlotSchema";

import CInputNumber from "../../form/CInputNumbet";
import CSelect from "../../form/CSelect";
import { useGetAllServiceQuery } from "../../../redux/features/serviceApi";
import { IService } from "../../../types/service.types";

import { FieldValues, SubmitHandler } from "react-hook-form";
import CDatePicker from "../../form/CDatePicker";

const SlotsModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const options: SelectProps["options"] = [];

  const { data } = useGetAllServiceQuery([]);

  data?.data?.map((item: IService) => {
    options.push({
      value: item._id,
      label: item.name,
    });
  });

  const onSubmit:SubmitHandler<FieldValues> = async (values) => {
    console.log(values)
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        CREATE
      </Button>
      <Modal
        title="Create Slots"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div>
          <CForm onSubmit={onSubmit} resolver={zodResolver(addSlotsSchema)}>
            <CSelect
              name="service"
              label="Select Service"
              options={options}
              placeholder="Select a service"
            />
            <CDatePicker name="date" label="Select Date" />
            <CInputNumber name="startTime" label="Start Time" prefix="HH:" />
            <CInputNumber name="endTime" label="End Time" prefix="HH:" />

            <Button htmlType="submit" type="primary">Create Slots</Button>
          </CForm>
        </div>
      </Modal>
    </>
  );
};

export default SlotsModal;
