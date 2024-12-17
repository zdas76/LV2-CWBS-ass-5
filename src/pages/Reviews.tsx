import { Link } from "react-router-dom";
import ReviewsForm from "../components/page/Reviews/ReviewsForm";
import { currentUser } from "../redux/features/authSlice";
import { useGetAllReviewsQuery } from "../redux/features/reviewsApi";
import { useAppSelector } from "../redux/hooks";
import { TReviews } from "../types/reviews";
import { Rate } from "antd";

export default function Reviews() {
  const user = useAppSelector(currentUser);

  const { data: reviews, isFetching } = useGetAllReviewsQuery([]);
  const AllReviews = reviews?.data?.reviews;

  if (isFetching) {
    <p>Loding .....</p>;
  }

  return (
    <div className="container mx-auto my-24">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {AllReviews?.map((review: TReviews, idx: number) => (
          <div key={idx} className="border shadow-xl p-5">
            <p className="mb-5 font-bold">{review.user.name}</p>
            <p className="text-justify mb-5">{review.feedback}</p>
            <p>
              <Rate defaultValue={review.rating} />
            </p>
          </div>
        ))}
      </div>
      <div className="my-10 w-full">
        {user ? (
          <div>
            <ReviewsForm />
          </div>
        ) : (
          <div className="relative">
            <ReviewsForm />
            <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center absolute">
              <div className="">
                <button
                  className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  <Link to="/login">Login to Leave a Review</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
