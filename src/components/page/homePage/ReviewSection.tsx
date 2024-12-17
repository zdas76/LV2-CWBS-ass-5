import { useGetAllReviewsQuery } from "../../../redux/features/reviewsApi";
import { TReviews } from "../../../types/reviews";
import { Divider, Rate } from "antd";
import { Link } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/features/authSlice";
import ReviewsForm from "../Reviews/ReviewsForm";

export default function ReviewSection() {
  const { data: reviews } = useGetAllReviewsQuery([]);

  const user = useAppSelector(currentUser);

  return (
    <div className="my-16">
        <Divider />
      <div className="my-10 ">
        {user ? (
          <div>
            <ReviewsForm />
          </div>
        ) : (
          <div className="relative">
            <ReviewsForm />
            <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center absolute">
              <div className="">
                <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                  <Link to="/login">Login to Leave a Review</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <p className="space-x-10 text-center my-10">
          <span className="font-bold text-xl">
            Total Reviews : {reviews?.data?.totalReviews}
          </span>
          <span className="font-bold text-xl">
            Averate Rating : {reviews?.data?.averageRating[0].average}
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews?.data?.reviews
            ?.slice(0, 2)
            .map((review: TReviews, idx: number) => (
              <div key={idx} className="border shadow-xl p-5">
                <p className="mb-5 font-bold">{review.user.name}</p>
                <p className="text-justify mb-5">{review.feedback}</p>
                <p>
                  <Rate defaultValue={review.rating} disabled />
                </p>
              </div>
            ))}
        </div>
        <p className="text-2xl font-bold flex justify-end mt-5">
          <Link to={`/reviews`} className="flex self-end">
            View All Reviews <ArrowBigRight size={40} />
          </Link>
        </p>
      </div>
    </div>
  );
}
