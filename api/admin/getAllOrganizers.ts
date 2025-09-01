import { IOrganizer } from "../../types/organizer";
import { axiosInstanseAdmin } from "../../lib/axios/admin/axiosInstance";

type GetAllOrganizersResponse = {
  organizers: IOrganizer[];
  totalPages: number;
};

export const GetAllOrganizers = async (
  currentPage: number,
  filter: string
): Promise<GetAllOrganizersResponse> => {
  const { data } = await axiosInstanseAdmin.get(
    `/admin/all-organizers?currentPage=${currentPage}&filter=${filter}`
  );
  return data;
};
