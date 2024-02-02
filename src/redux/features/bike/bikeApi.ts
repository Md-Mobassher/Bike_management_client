import { baseApi } from "../../api/baseApi";
import { TagDescription } from "@reduxjs/toolkit/query/react";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBike: builder.mutation({
      query: (newBike) => ({
        url: "/bikes",
        method: "POST",
        body: newBike,
      }),
    }),
    getAllBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
      providesTags: (result, error, id): TagDescription[] => [
        { type: "Bike", id: "All" },
      ],
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
    }),
    deleteABike: builder.mutation({
      query: (id) => ({
        url: `bikes/${id}`,
        method: "PUT",
      }),
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
