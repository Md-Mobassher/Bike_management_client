import { TQueryParam } from "@/types/global.type";
import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
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
        method: "PUT",
      }),
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useAddBikeMutation,
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useUpdateABikeMutation,
  useDeleteABikeMutation,
} = bikeApi;
