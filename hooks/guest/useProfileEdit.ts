import { useMutation } from "@tanstack/react-query"; 
import { ProfileEditGuest } from "../../api/guest/profileEdit";

type ProifleEditPayload = {
    name: string;
    age: number;
    mobile: number;
};

export const useProfileEdit = () => {
    return useMutation({
        mutationFn: (payload: ProifleEditPayload) => ProfileEditGuest(payload),
    });
};
