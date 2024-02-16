import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBike: builder.mutation({
      query: (newBike) => ({
        url: "/bikes",
        method: "POST",
        body: newBike,
      }),
      invalidatesTags: ["bike"],
    }),
    getAllBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
        providesTags: ["Bikes"],
      }),
      providesTags: ["bike"],
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
