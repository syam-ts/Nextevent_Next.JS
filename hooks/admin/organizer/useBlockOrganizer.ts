import { useMutation } from "@tanstack/react-query";
import { BlockOrganizer } from "../../../api/admin/organizer/blockOrganizer";

type BlockOrganizerPayload = {
  organizerId: string;
};

export const useBlockOrganizer = () => {
  return useMutation({
    mutationFn: (payload: BlockOrganizerPayload) => BlockOrganizer(payload),
  });
};
