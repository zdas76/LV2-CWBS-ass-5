import { useGetAllServiceQuery } from "../../../redux/features/serviceApi"
import { IService } from "../../../types/service.types"
import ServiceCard from "./ServiceCard"

export const FeaturedService =()=>{
    const {data} = useGetAllServiceQuery([])
    
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cosl-2 lg:grid-cols-3 gap-4 md:gap-8">
            {
                data?.data?.map((service:IService, idx:number)=>(
                    <div key={idx}>
                        <ServiceCard service={service}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}