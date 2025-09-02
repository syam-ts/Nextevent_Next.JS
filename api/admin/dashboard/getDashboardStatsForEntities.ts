 
import { axiosInstanseAdmin } from "../../../lib/axios/admin/axiosInstance";
  
type GetDashboardStatsForEntitiesResponse = {
   totalEvents: number;
   totalOrganizers: number;
   totalGuests: number;
};

export const GetDashboardStatsForEntities = async (
): Promise<GetDashboardStatsForEntitiesResponse> => {
  const { data } = await axiosInstanseAdmin.get(
    `/admin/dashboard/all-entities`
  );
  return data;
};
