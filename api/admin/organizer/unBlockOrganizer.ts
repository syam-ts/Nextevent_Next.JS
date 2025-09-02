import { axiosInstanseAdmin } from "../../../lib/axios/admin/axiosInstance";

type UnBlockOrganizerPayload = {
  organizerId: string;
};

type UnBlockOrganizerResponse = { 
  success: boolean;
};

export const UnBlockOrganizer = async (
  payload: UnBlockOrganizerPayload
): Promise<UnBlockOrganizerResponse> => {
  const { data } = await axiosInstanseAdmin.patch(
    `/admin/organizer/unblock/${payload.organizerId}`,
    {
      withCredentials: true,
    }
  );
  return data;
};
