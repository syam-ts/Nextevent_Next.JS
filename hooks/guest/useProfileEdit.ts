import { useMutation } from "@tanstack/react-query"; 
import { ProfileEditGuest } from "../../api/guest/profileEdit";

type ProifleEditPayload = {
    name: string;
    profilePicture: string;
    location: string;
    mobile: number;
};

export const useProfileEdit = () => {
    return useMutation({
        mutationFn: (payload: ProifleEditPayload) => ProfileEditGuest(payload),
    });
};
