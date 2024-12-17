import { Button, Modal } from "antd";
import { useState } from "react";
import CForm from "../../form/CForm";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addServiceSchema } from "../../../Schemas/ServiceSchema";
import CInput from "../../form/CInput";
import CInputNumber from "../../form/CInputNumbet";
import { useAddServiceMutation } from "../../../redux/features/serviceApi";

export default function AddServiceModal() {
  const [open, setOpen] = useState(false);
  const [addService, { isLoading }] = useAddServiceMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("Creating ....");
    try {
      const result = await addService(values).unwrap();

      if (result) {
        toast.success(`${result?.message}`, {
          id: toastId,
          duration: 2000,
        });
      }
      setOpen(false);
    } catch (error: any) {
      toast.error(`${error?.message}`, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Service
      </Button>
      <Modal
        title="Add a service"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div className="w-full">
          <CForm resolver={zodResolver(addServiceSchema)} onSubmit={onSubmit}>
            <CInput type="text" name="name" label="Service Name" />
            <CInput
              type="text"
              name="description"
              label="Service Description"
            />
            <CInputNumber name="price" label="Price" prefix="TK." />
            <CInputNumber name="duration" label="Duration" prefix="mm:" />

            <CInput type="file" name="images" label="Images" />

            <Button type="primary" htmlType="submit">
              {isLoading ? (
                <span className="disabled">Submiting</span>
              ) : (
                "Submit"
              )}
            </Button>
          </CForm>
        </div>
      </Modal>
    </div>
  );
}
