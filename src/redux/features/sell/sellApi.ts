import { baseApi } from "../../api/baseApi";

const sellApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

    getInvoice: builder.query({
      query: (id) => ({
        url: `/invoice/${id}`,
        method: "GET",
      }),
    }),

    sellABike: builder.mutation({
      query: (salesInfo) => ({
        url: "/sales",
        method: "POST",
        body: salesInfo,
      }),
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useSellABikeMutation,
  useGetInvoiceQuery,
  useGetSellHistoryQuery,
} = sellApi;
