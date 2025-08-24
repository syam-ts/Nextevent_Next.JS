import { useMutation } from "@tanstack/react-query";
import { ProfileEditOrganizer } from "../../api/organizer/profileEdit";
import { IOrganizer } from "../../types/organizer";

type ProifleEditPayload = Pick<
    IOrganizer,
    "name" | "mobile" | "organizationName"
>;

export const useProfileEdit = () => {
    return useMutation({
        mutationFn: (payload: ProifleEditPayload) => ProfileEditOrganizer(payload),
    });
};
