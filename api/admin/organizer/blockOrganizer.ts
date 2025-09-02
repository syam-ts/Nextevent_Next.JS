import { axiosInstanseAdmin } from "../../../lib/axios/admin/axiosInstance";

type BlockOrganizerPayload = {
  organizerId: string;
};

type BlockOrganizerResponse = { 
  success: boolean;
};

export const BlockOrganizer = async (
  payload: BlockOrganizerPayload
): Promise<BlockOrganizerResponse> => {
  const { data } = await axiosInstanseAdmin.patch(
    `/admin/organizer/block/${payload.organizerId}`,
    {
      withCredentials: true,
    }
  );
  return data;
};
