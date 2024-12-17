import { Button, Form, Input, InputNumber, Select, Table } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { FieldValues } from "react-hook-form";
import { useAppSelector } from "../redux/hooks";
import { useCreateBookingMutation } from "../redux/features/bookingApi";
import { toast } from "sonner";

type TSerivce = {
  slotId: string;
  serviceId: string;
};

export default function PaymentPage() {
   
  const VehicleType = [
    "car",
    "SUV",
    "van",
    "motorcycle",
    "bus",
    "electricVehicle",
    "hybridVehicle",
    "bicycle",
    "tractor",
  ];

  const state = useAppSelector((state) => state.booking.carts);

  const TotalCost = state.reduce(
    (accumulator, current) => accumulator + current.service.price,
    0
  );
  const GrantTotal = TotalCost + (TotalCost * 15) / 100;

  const service: TSerivce[] = [];
  state.map((item) =>
    service.push({
      slotId: item._id as string,
      serviceId: item.service._id as string,
    })
  );

  const [form] = Form.useForm();
  
  const options: DefaultOptionType["options"] = [];

  VehicleType.map((item) => {
    options.push({
      value: item,
      label: item,
    });
  });

  const [createBooking, { isLoading }] = useCreateBookingMutation();

  const onFinish = async (values: FieldValues) => {
    const data = { ...values, service: service, total: GrantTotal };
    const toastId = toast.loading("Creating booking ....");

    try {
      const result = await createBooking(data).unwrap();
      
      if (result) {
        toast.success(`${result?.message}`, {
          id: toastId,
          duration: 2000,
        });
        window.location.href = result.data.payment_url
      }else {
        console.error('Booking creation failed:', result.message);
      }
      form.resetFields();
      
    } catch (error: any) {
      toast.error(`${error?.message}`, {
        id: toastId,
        duration: 2000,
      });
    }

  };

  const columns = [
    {
      title: "Service Name",
      dataIndex: ["service", "name"],
      key: "name",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Price",
      dataIndex: ["service", "price"],
      key: "endTime",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row container mx-auto w-full gap-8 my-20">
      <div className="w-full md:w-1/2 px-5 ">
        <p className="uppercase text-2xl font-bold mb-2">Vehicle Information</p>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="vehicleType"
            label="vehicle Type"
            rules={[
              {
                required: true,
                message: "Please select vehicle Type!",
              },
            ]}
          >
            <Select options={options} placeholder="Select one" />
          </Form.Item>

          <Form.Item
            name="vehicleBrand"
            label="vehicle Brand"
            rules={[
              {
                required: true,
                message: "Please input your vehicle Brand Name!",
              },
            ]}
          >
            <Input placeholder="vehicle Brand" />
          </Form.Item>

          <Form.Item
            name="vehicleModel"
            label="vehicle Model"
            rules={[
              {
                required: true,
                message: "Please input your vehicle Model name!",
              },
            ]}
          >
            <Input type="text" placeholder="vehicle Model" />
          </Form.Item>
          <Form.Item
            name="manufacturingYear"
            label="manufacturing Year"
            rules={[
              {
                required: true,
                message: "Please input your manufacturing Year!",
              },
            ]}
          >
            <InputNumber
              type="number"
              placeholder="manufacturing Year"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            name="registrationPlate"
            label="registration Plate"
            rules={[
              {
                required: true,
                message: "Please input your manufacturing Year!",
              },
            ]}
          >
            <Input placeholder="registration Plate" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" >
             {
              isLoading ?  'Paying ....': ' Pay Now!'
             }
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="w-full md:w-1/2">
        <Table dataSource={state} columns={columns} pagination={false} />
        <div className="text-left flex flex-col items-end mt-6">
          <p>
            Total Cost : <strong>{TotalCost}.00</strong>
          </p>
          <p>
            tex : <strong>{(TotalCost * 15) / 100}.00</strong>
          </p>
          <p>
            Grand Total : <strong>{GrantTotal}.00</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
