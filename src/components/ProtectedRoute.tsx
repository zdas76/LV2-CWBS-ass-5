import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { currentToken, logOut } from "../redux/features/authSlice";
import { verifyToken } from "../Utils/verifyToken";
import { TUser } from "../types/authtypes";



export default function ProtectedRoute({
  children,
  role,
}: {
  children: ReactNode;
  role: string | undefined;
}) {
  const token = useAppSelector(currentToken);

  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role ) {
    dispatch(logOut());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}
