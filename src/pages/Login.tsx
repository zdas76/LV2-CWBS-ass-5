import { Button, Col, Flex } from "antd";
import CForm from "../components/form/CForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../Schemas/AuthSchema";
import CInput from "../components/form/CInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../redux/features/authAPi";
import { toast } from "sonner";
import { verifyToken } from "../Utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/authSlice";
import { TUser } from "../types/authtypes";

export default function Login() {
  const [logIn] = useLogInMutation();
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("Loging.....");
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
      };
      const response = await logIn(userInfo).unwrap();
      
      if (response.success) {
        const user = verifyToken(response.token) as TUser;

        dispatch(setUser({ user: user, token: response.token }));
        toast.success("Logged in successfuly", { id: toastId, duration: 2000 });
      }

      Navigate(`/`);
    } catch (error) {
      toast.error("User not found", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Flex justify="center" align="center" className="min-h-[85vh] bg-blue-300">
      <Col
        span={20}
        md={{ span: 8 }}
        className="border p-14 shadow-lg bg-blue-500 rounded-xl text-white"
      >
        <CForm resolver={zodResolver(loginSchema)} onSubmit={onSubmit}>
          <CInput type="email" name="email" label="Email" />

          <CInput type="password" name="password" label="Password" />

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </CForm>
        <div className="flex text-white mt-8 gap-3">
          <p className="text-md ">If you have no account! please!</p>
          <span>
            <Link to="/singup" className="font-bold uppercase">
              create a new account.
            </Link>
          </span>
        </div>
      </Col>
    </Flex>
  );
}
