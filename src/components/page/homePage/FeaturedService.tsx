import { Link } from "react-router-dom";
import { useGetAllServiceQuery } from "../../../redux/features/serviceApi";
import { IService } from "../../../types/service.types";
import ServiceCard from "./ServiceCard";
import { ArrowBigRight } from "lucide-react";
import { Divider } from "antd";

export const FeaturedService = () => {
  const { data } = useGetAllServiceQuery([]);

  return (
    <div className="my-10">
      <Divider />
      <div className="grid grid-cols-1 md:grid-cosl-2 lg:grid-cols-3 gap-4 md:gap-8">
        {data?.data?.slice(0, 6).map((service: IService, idx: number) => (
          <div key={idx}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <p className="text-2xl font-bold flex justify-end">
        <Link to={`/service`} className="flex self-end">
          View All Services <ArrowBigRight size={40} />
        </Link>
      </p>
    </div>
  );
};
