import { useGetAllBookingQuery } from "../../redux/features/bookingApi";
import { useGetAllServiceQuery } from "../../redux/features/serviceApi";
import { useGetAllSlotsQuery } from "../../redux/features/slotsApi";
import { useGetAllUserQuery } from "../../redux/features/userApi";

export default function AdminDashboard() {
  const { data: AllBooking } = useGetAllBookingQuery([]);

  const { data: AllUsers } = useGetAllUserQuery([]);
  
  const { data: AllSlots } = useGetAllSlotsQuery([]);
  const { data: AllServices } = useGetAllServiceQuery([]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className=" p-10">
        <p className="text-2xl my-5">
          Total booking: <strong>{AllBooking?.data?.length}</strong>
        </p>
        <p className="text-2xl font-bold mb-5">Recent Booking</p>
        <table>
          <tr>
            <th>Sl. No.</th>
            <th>Transaction Id</th>
            <th>Registration Plate No.</th>
            <th>Booking status</th>
            <th>Payment Status</th>
          </tr>
          {AllBooking?.data?.slice(5).map((data: any, idx: number) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{data?.transactionId}</td>
              <td>{data?.registrationPlate}</td>
              <td>{data?.status}</td>
              <td>{data?.paymentStatus}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className=" p-10">
        <p className="text-2xl my-5">
          Total User: <strong>{AllUsers?.data?.length}</strong>
        </p>
      </div>
      <div className=" p-10">
      <p className="text-2xl my-5">
          Total Slots: <strong>{AllSlots?.data?.length}</strong>
        </p>
      </div>
      <div className=" p-10">
      <p className="text-2xl my-5">
          Total Service: <strong>{AllServices?.data?.length}</strong>
        </p>
      </div>
    </div>
  );
}
