import { baseApi } from "../../api/baseApi";

const sellApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sellABike: builder.mutation({
      query: (userInfo) => ({
        url: "/sell",
        method: "POST",
        body: userInfo,
      }),
    }),
    getSellHistory: builder.mutation({
      query: (userInfo) => ({
        url: "/sales-history/:interval",
        method: "GET",
        body: userInfo,
      }),
    }),
  }),
});

export const { useSellABikeMutation, useGetSellHistoryMutation } = sellApi;
