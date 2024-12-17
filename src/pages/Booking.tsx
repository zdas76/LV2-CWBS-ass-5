import { Button, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteItem } from "../redux/features/bookingSlice";
import { TSlot } from "../types/Slots";
import AddBookingBook from "../components/page/booking/AddBookingBook";
import { useNavigate } from "react-router-dom";

export default function Booking() {

  const state = useAppSelector((state) => state.booking.carts);

  const TotalCost = state.reduce((accumulator, current)=> accumulator + current.service.price, 0)
  const GrantTotal = TotalCost + (TotalCost * 15 / 100);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
      title: "Action",
      key: "address",
      render: (item: TSlot) => (
        <div>
          <Button onClick={() => dispatch(deleteItem(item))}>Delete</Button>
        </div>
      ),
    },
  ];



  return (
    <div className="min-h-96">
      <div className="flex flex-col md:flex-row w-full mt-24 container mx-auto gap-10">
        <div className="w-full md:w-1/2 px-2">
          <div className="mb-5">
            <AddBookingBook />
          </div>
          <div >
            <Table dataSource={state} columns={columns} pagination={false} />
          </div>
        </div>


        <div className="w-full md:w-1/2 px-2 p-2">

        <p className="text-3xl font-bold mb-5">Order Summary</p>
        <table  className="w-full text-lg">
          <tr>
            <td className="w-2/3">Selested Items</td>
            <td className="w-1/3">{state.length}</td>
          </tr>
          <tr>
            <td>Total Price</td>
            <td>TK.{TotalCost}.00</td>
          </tr>
          <tr className="border-b-2">
            <td>Tax (15%)</td>
            <td> Tk. {TotalCost * 15 / 100}.00</td>
          </tr>
          <tr className="font-bold text-xl">
            <td>Grand Total :</td>
            <td>Tk. {GrantTotal}.00</td>
          </tr>
        </table>
        
        <Button className="mt-20 px-10 py-5 text-lg font-bold" type="primary"  onClick={()=> navigate('/payment', {state:{grantTotal: GrantTotal, totalCost : TotalCost}})} >Proceed Checkout</Button>
          
        </div>
      </div>
    </div>
  );
}
