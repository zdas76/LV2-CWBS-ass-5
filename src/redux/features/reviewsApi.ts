import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tagTypes";

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => {
        return {
          url: "/reviews",
          method: "GET",
        };
      },
      providesTags: [tagTypes.reviews],
    }),

    addReviews: builder.mutation({
      query: (data) => {
        return {
          url: "/reviews",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.reviews],
    }),
  }),
});

export const { useGetAllReviewsQuery, useAddReviewsMutation } = reviewsApi;
