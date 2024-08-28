import { baseApi } from "./../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      //   invalidatesTags: [tagTypes.order],
    }),

    singUp: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/signup",
          method: "POST",
          body: data,
        };
      },
      //   invalidatesTags: [tagTypes.order],
    }),
  }),
});

export const { useLogInMutation, useSingUpMutation } = authApi;
