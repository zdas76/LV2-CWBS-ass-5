
import { useGetServiceByIdQuery } from "../redux/features/serviceApi";
import { useParams } from "react-router-dom";
import {  Image } from "antd";
import AddBookingModal from "../components/page/booking/AddBookingModal";

export default function ServiceDetails() {
  const {postId} = useParams()
  const {data} = useGetServiceByIdQuery(postId)
  const service = data?.data;
  console.log(service)
 


  return <div className="my-20 ">
  <div className="w-full md:max-w-5xl lg:max-w-5lg mx-auto ">
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 border p-5 bg-white">
      <div>
        <Image src={service?.images} />
      </div>
      <div className=" p-2 ">
        <p className="text-3xl font-bold">{service?.name}</p>
        <p className="my-10 text-2xl">
          <strong> Price : </strong>
          <span>{service?.price}</span>
        </p>
        <p className="text-justify leading-5">
          <strong>Description :</strong> {service?.description}
        </p>
        <p className="my-5 text-xl">
          Setvice Time :
          {service?.duration}
        </p>
        <AddBookingModal service={service}/>
      </div>
    </div>
    <div className=" mt-5"></div>
  </div>
  <div></div>
</div>;
}
