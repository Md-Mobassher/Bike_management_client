import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types/global.type";

const maintenanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMaintenance: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/maintenance",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["maintenance"],
    }),

    getMyRequestedMaintenance: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/maintenance/me",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["maintenance"],
    }),

    requestMaintenance: builder.mutation({
      query: (maintenanceInfo) => ({
        url: `/maintenance`,
        method: "POST",
        body: maintenanceInfo,
      }),
      invalidatesTags: ["maintenance"],
    }),

    updateMaintenance: builder.mutation({
      query: (salesInfo) => ({
        url: "/maintenance",
        method: "PUT",
        body: salesInfo,
      }),
      invalidatesTags: ["maintenance"],
    }),
  }),
});

export const {
  useGetAllMaintenanceQuery,
  useGetMyRequestedMaintenanceQuery,
  useRequestMaintenanceMutation,
  useUpdateMaintenanceMutation,
} = maintenanceApi;
