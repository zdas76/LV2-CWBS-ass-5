
import { useGetServiceByIdQuery } from "../redux/features/serviceApi";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const {postId} = useParams()
  const {data} = useGetServiceByIdQuery(postId)
  console.log(data?.data)
  return <div>Reviews</div>;
}
