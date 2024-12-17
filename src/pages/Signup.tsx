import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CForm from "../components/form/CForm";
import CInput from "../components/form/CInput";
import { signUpSchema } from "../Schemas/AuthSchema";
import { Link, useNavigate } from "react-router-dom";
import CTextArea from "../components/form/CTextArea";
import { useSingUpMutation } from "../redux/features/authAPi";
import { toast } from "sonner";

export default function Signup() {
  const [signUp] = useSingUpMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("Creating ....");
    try {
      const result = await signUp(values).unwrap();
      console.log(result);
      if (result) {
        toast.success(`${result?.message}`, {
          id: toastId,
          duration: 2000,
        });
      }
      navigate(`/home`);
    } catch (error: any) {
      toast.error(`${error?.message}`, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      className="min-h-[85vh] bg-blue-300 py-5"
    >
      <Col
        span={20}
        md={{ span: 8 }}
        className="border p-14 shadow-lg bg-blue-500 rounded-xl text-white"
      >
        <CForm resolver={zodResolver(signUpSchema)} onSubmit={onSubmit}>
          <CInput type="text" name="name" label="Name" />

          <CInput type="email" name="email" label="Email" />

          <CInput type="password" name="password" label="Password" />

          <CInput type="text" name="phone" label="Phone Number" />
          <CTextArea name="address" label="Address" />

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </CForm>
        <div className="flex text-white mt-8 gap-3">
          <p className=" ">If you have already account! please!..</p>
          <span>
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </span>
        </div>
      </Col>
    </Flex>
  );
}
