import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tagTypes";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),

    getUserById: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),

    deleteUserById: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    changeUserRoal: builder.mutation({
      query: (data) => {
        const { id, role } = data;
        return {
          url: `/users/${id}`,
          method: "PUT",
          body: { role },
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserByIdMutation,
  useChangeUserRoalMutation,
  useGetUserByIdQuery
} = userApi;
