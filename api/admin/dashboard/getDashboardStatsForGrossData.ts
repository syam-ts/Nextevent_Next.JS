import { axiosInstanseAdmin } from "../../../lib/axios/admin/axiosInstance";

type GetDashboardStatsForGrossDataResponse = {
  totalTickets: number;
  totalRefund: number;
  totalTransfer: number;
  totalProfit: number;
};

export const GetDashboardStatsForGrossData =
  async (): Promise<GetDashboardStatsForGrossDataResponse> => {
    const { data } = await axiosInstanseAdmin.get(
      `/admin/dashboard/all-grossData`
    );
    return data;
  };
