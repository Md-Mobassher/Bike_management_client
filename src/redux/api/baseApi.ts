import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://bike-management-server.vercel.app/api/v1",
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `$(token)`);
    }
  },
});

export const baseApi = createApi({
  reducerPath: "",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
