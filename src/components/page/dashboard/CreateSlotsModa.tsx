import React, { useState } from "react";
import { Button, Modal } from "antd";
import CForm from "../../form/CForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { addSlotsSchema } from "../../../Schemas/SlotSchema";
import CSelect from "../../form/CSelect";
import { useGetAllServiceQuery } from "../../../redux/features/serviceApi";
import { IService } from "../../../types/service.types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CDatePicker from "../../form/CDatePicker";
import { DefaultOptionType } from "antd/es/select";
import { useCrateSlotsMutation } from "../../../redux/features/slotsApi";
import CInput from "../../form/CInput";
import Swal from "sweetalert2";

const SlotsModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const options: DefaultOptionType["options"] = [];

  const { data } = useGetAllServiceQuery([]);

  const [createSlots, { isLoading }] = useCrateSlotsMutation();

  data?.data?.map((item: IService) => {
    options.push({
      value: item._id,
      label: item.name,
    });
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      const result = await createSlots(values);
      if (result.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error)
    }
   
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
        onClose={() => setOpen(false)}
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
            <CInput
              name="startTime"
              label="Start Time"
              addonBefore="HH:MM"
              type="text"
              placeholder="00:00"
            />
            <CInput
              name="endTime"
              label="End Time"
              type="text"
              addonBefore="HH:MM"
              placeholder="00:00"
            />

            <Button htmlType="submit" type="primary">
              {isLoading ? (
                <span className="disabled">Creating....</span>
              ) : (
                "Create Slots"
              )}
            </Button>
          </CForm>
        </div>
      </Modal>
    </>
  );
};

export default SlotsModal;
