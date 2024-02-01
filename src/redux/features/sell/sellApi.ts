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
    getSellHistory: builder.query({
      query: () => ({
        url: "/sales-history/:interval",
        method: "GET",
      }),
    }),
  }),
});

export const { useSellABikeMutation, useGetSellHistoryQuery } = sellApi;
