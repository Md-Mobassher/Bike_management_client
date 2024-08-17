import { TQueryParam } from "@/types/global.type";
import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            // Check if the value is not undefined before appending
            if (item.value !== undefined) {
              params.append(item.name, item.value as string);
            }
          });
        }

        return {
          url: "/bikes",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["bike"],
    }),

    addBike: builder.mutation({
      query: (newBike) => ({
        url: "/bikes",
        method: "POST",
        body: newBike,
      }),
      invalidatesTags: ["bike"],
    }),

    duplicateBike: builder.mutation({
      query: (arg) => ({
        url: `/bikes/duplicate/${arg.id}`,
        method: "POST",
        body: arg.duplicateBikeData,
      }),
      invalidatesTags: ["bike"],
    }),

    getSingleBike: builder.query({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
    }),

    updateABike: builder.mutation({
      query: ({ id, updatedBike }) => ({
        url: `bikes/${id}`,
        method: "PATCH",
        body: updatedBike,
      }),
      invalidatesTags: ["bike"],
    }),

    deleteABike: builder.mutation({
      query: (id) => ({
        url: `bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bike"],
    }),

    bulkDeleteBikes: builder.mutation({
      query: (bikeIds) => ({
        url: `bikes/bulk-delete`,
        method: "DELETE",
        body: bikeIds,
      }),
      invalidatesTags: ["bike"],
    }),

    getbikeAnalytics: builder.query({
      query: () => ({
        url: `/bikes/analytics`,
        method: "GET",
      }),
      providesTags: ["bike"],
    }),
  }),
});

export const {
  useAddBikeMutation,
  useDuplicateBikeMutation,
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useUpdateABikeMutation,
  useDeleteABikeMutation,
  useBulkDeleteBikesMutation,
  useGetbikeAnalyticsQuery,
} = bikeApi;
