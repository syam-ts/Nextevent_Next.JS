import { useMutation } from "@tanstack/react-query"; 
import { MarkAsReadNotificationOrg } from "../../api/organizer/MarkAsReadNotificationOrg";

type MarkAsReadNotificationOrgPayload = {
  notificationId: string;
};

export const useMarkAsReadNotificationOrg = () => {
  return useMutation({
    mutationFn: (payload: MarkAsReadNotificationOrgPayload) =>
      MarkAsReadNotificationOrg(payload),
  });
};
