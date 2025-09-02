import { useQuery } from "@tanstack/react-query";
import { GetDashboardStatsForEntities } from "../../../api/admin/dashboard/getDashboardStatsForEntities";

export const useGetDashboardStatsForEntities = () => {
  return useQuery({
    queryKey: ["totalEvents", "totalOrganizers", "totalGuests"],
    queryFn: () => GetDashboardStatsForEntities(),
  });
};
