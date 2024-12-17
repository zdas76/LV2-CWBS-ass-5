import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tagTypes";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createBooking: builder.mutation({
      query: (data) => {
        console.log(data)
        return {
          url: "bookings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.bookings],
    }),

    getAllBooking: builder.query({
      query: () => {
       
        return {
          url: "/bookings",
          method: "GET",
        };
      },
      providesTags: [tagTypes.bookings],
    }),

    getbookById: builder.query({
      query: (id) => {
        return {
          url: `/bookings/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.bookings],
    }),
   
    getMybooking: builder.query({
      query: () => {
        return {
          url: `/my-bookings`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.bookings],
    }),

   
}),
});

export const {
  useGetAllBookingQuery,
  useGetbookByIdQuery,
  useCreateBookingMutation,
  useGetMybookingQuery
} = bookingApi;
