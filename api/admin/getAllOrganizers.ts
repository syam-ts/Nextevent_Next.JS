import { IOrganizer } from "../../types/organizer";
import { axiosInstanseAdmin } from "../../lib/axios/admin/axiosInstance";

type GetAllOrganizersResponse = {
  organizers: IOrganizer[];
};

export const GetAllOrganizers = async (): Promise<GetAllOrganizersResponse> => {
  const { data } = await axiosInstanseAdmin.get(`/admin/all-organizers`);
  return data;
};
