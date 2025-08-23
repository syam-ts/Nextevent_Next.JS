import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";
import { IOrganizer } from "../../types/organizer";

type GetAllOrganizersResponse = {
  organizers: IOrganizer[]
};

export const GetAllOrganizers = async (): Promise<GetAllOrganizersResponse> => {
  const { data } = await axiosInstanseGuest("/guest/organizers");
  return data;
};
