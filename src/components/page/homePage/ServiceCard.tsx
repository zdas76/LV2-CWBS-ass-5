import { Button } from "antd";
import { IService } from "../../../types/service.types";
import { Link } from "react-router-dom";
import AddBookingModal from "../booking/AddBookingModal";

// Add more services here as needed

const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <div className="py-4 md:py-6">
      <div className="bg-white rounded-lg shadow-lg p-5">
        <img
          src={service?.images}
          alt={service?.name}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <h3 className="text-lg font-semibold mt-3">{service?.name}</h3>
        <p className="text-gray-600 mt-2 line-clamp-1">{service?.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-green-600">
            ${service?.price}
          </span>
          <span className="text-sm text-gray-500">
            Duration: {service?.duration} mins
          </span>
        </div>
        <div className="flex gap-2 mt-3 justify-between">
        <AddBookingModal service={service}/>
        <Button className="w-1/3" type="primary"> <Link to={`/service/${service?._id}`}>Details</Link> </Button> 
        </div>
      </div>

    </div>
  );
};

export default ServiceCard;
