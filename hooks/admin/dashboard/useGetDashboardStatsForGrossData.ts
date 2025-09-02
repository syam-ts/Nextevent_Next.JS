import { useQuery } from "@tanstack/react-query";
import { GetDashboardStatsForGrossData } from "../../../api/admin/dashboard/getDashboardStatsForGrossData";

export const useGetDashboardStatsForGrossData = () => {
  return useQuery({
    queryKey: ["totalTickets", "totalRefund", "totalTransfer", "totalProfit"],
    queryFn: () => GetDashboardStatsForGrossData(),
  });
};
