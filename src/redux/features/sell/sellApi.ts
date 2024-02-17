import { TQueryParam } from "@/types/global.type";
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
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          params.append("interval", args);
        }

        return {
          url: "/sales/history",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useSellABikeMutation, useGetSellHistoryQuery } = sellApi;
