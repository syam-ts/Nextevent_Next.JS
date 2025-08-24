import { axiosInstanseOrganizer } from "../../lib/axios/organizer/axiosInstance";
import { INotification } from "../../types/notification";
import { IOrganizer } from "../../types/organizer";

type MarkAsReadNotificationOrgPayload = {
  notificationId: string;
};

type ProfileEditResponse = { notification: INotification };

export const MarkAsReadNotificationOrg = async (
  payload: MarkAsReadNotificationOrgPayload
): Promise<ProfileEditResponse> => {
  const { data } = await axiosInstanseOrganizer.put(
    `/organizer/notification/${payload.notificationId}`,
    {
      withCredentials: true,
    }
  );
  return data;
};
