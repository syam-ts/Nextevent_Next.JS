import { useMutation } from "@tanstack/react-query";
import { ProfileEditOrganizer } from "../../api/organizer/api/profileEdit";

type ProifleEditPayload = {
    name: string;
    mobile: number;
    organizationName: string;
};

export const useProfileEdit = () => {
    return useMutation({
        mutationFn: (payload: ProifleEditPayload) => ProfileEditOrganizer(payload),
    });
};
