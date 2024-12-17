import type { FormProps } from "antd";
import { Button, Form, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAddReviewsMutation } from "../../../redux/features/reviewsApi";
import { toast } from "sonner";

type FieldType = {
  feedback: string;
  rating: string;
};

export default function ReviewsForm() {
  const [addReviews] = useAddReviewsMutation();

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const toastId = toast.loading("Adding reviews ....");

    try {
      const result = await addReviews(values).unwrap();

      if (result) {
        toast.success(`${result?.message}`, {
          id: toastId,
          duration: 2000,
        });
      }
      
      form.resetFields();
    } catch (error: any) {
      toast.error(`${error?.message}`, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-3xl p-5 mx-auto border shadow-xl">

      <p className="uppercase text-center text-xl font-bold mb-5">Give your review </p>
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label="Feedback"
          name="feedback"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <TextArea rows={6} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Rating"
          name="rating"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Rate className="text-green-500" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
