import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-management-server.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
});
