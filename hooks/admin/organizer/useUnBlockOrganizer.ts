import { useMutation } from "@tanstack/react-query"; 
import { UnBlockOrganizer } from "../../../api/admin/organizer/unBlockOrganizer";

type UnBlockOrganizerPayload = {
  organizerId: string;
};

export const useUnBlockOrganizer = () => {
  return useMutation({
    mutationFn: (payload: UnBlockOrganizerPayload) => UnBlockOrganizer(payload),
  });
};
