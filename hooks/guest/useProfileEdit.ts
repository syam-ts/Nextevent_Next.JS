import { useMutation } from "@tanstack/react-query";
import { ProfileEditGuest } from "../../api/guest/profileEdit";
import { IGuest } from "../../types/guest";

type ProifleEditPayload = Pick<IGuest, "name" | "profilePicture" | "location" | "mobile">;

export const useProfileEdit = () => {
    return useMutation({
        mutationFn: (payload: ProifleEditPayload) => ProfileEditGuest(payload),
    });
};
