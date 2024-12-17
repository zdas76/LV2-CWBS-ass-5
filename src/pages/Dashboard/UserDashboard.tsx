import { useGetMybookingQuery } from "../../redux/features/bookingApi";
import { useGetUserByIdQuery } from "../../redux/features/userApi";

export default function UserDashboard() {
  const { data:Booking } = useGetMybookingQuery([]);
  const { data } = useGetUserByIdQuery([]);
  const user = data?.data;
  console.log(user);
  console.log("first", Booking)
  return (
    <div>
      <p className="text-center mt-12 text-2xl font-bold uppercase">User Dashboard</p>

      <div>
        <p>User Info</p>
        <p>Name: {user.name}</p>
      </div>
    </div>
  );
}
