import { EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { IService } from "../../../types/service.types";
import CForm from "../../form/CForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import CInput from "../../form/CInput";
import CInputNumber from "../../form/CInputNumbet";
import { updateServiceSchema } from "../../../Schemas/ServiceSchema";
import { useUpdateSerivceMutation } from "../../../redux/features/serviceApi";
import { uploadImagetoImgdb } from "../../../Utils/uploadImagetoImgdb";

export default function UpdateServiceModal(item : IService) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File>();
  const [updateService, { isLoading }] = useUpdateSerivceMutation()

  const serviceValue = {
      name: item.name,
      description : item.description,
      duration : item.duration,
      price: item.price,
      images: item.images,
  }
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    
    const toastId = toast.loading("Creating ....");

    try {
      const imgImage = await uploadImagetoImgdb(image as File)
      
      const updateData = {
        ...values,
        id:item._id,
        images: imgImage.data.display_url,
      };

      console.log(updateData)

      const result = await updateService(updateData).unwrap();
      console.log(result)
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

  if(isLoading){
    <p>Loading ....</p>
  }

  return (
    <div>
      <Button
        type="text"
        className="rounded-full size-10"
        onClick={() => setOpen(true)}
      >
        <EditOutlined />
      </Button>

      <Modal
        title="Update service"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div className="w-full">
          <CForm resolver={zodResolver(updateServiceSchema)} onSubmit={onSubmit} defaultValues={serviceValue} >
            <CInput type="text" name="name" label="Service Name" />
            <CInput
              type="text"
              name="description"
              label="Service Description"
            />
            <CInputNumber name="price" label="Price" prefix="TK." />
            <CInputNumber name="duration" label="Duration" prefix="mm:" />

            <Input type="file" name="images" 
             onChange={(e) =>
              setImage(e.target.files?.[0] as unknown as File)} />

            
            <Button type="primary" htmlType="submit" className="my-5">
              {isLoading ? <span className="disabled">Submiting</span> : "Submit"}
            </Button>
          </CForm>
        </div>
      </Modal>
    </div>
  );
}
