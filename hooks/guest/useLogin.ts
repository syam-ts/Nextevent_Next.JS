import { useMutation } from "@tanstack/react-query";
import { LoginGuest } from "../../api/guest/login";
import { IGuest } from "../../types/guest";

type LoginPayload = Pick<IGuest, "email" | "password">;

export const useLogin = () => {
    return useMutation({
        mutationFn: (payload: LoginPayload) => LoginGuest(payload),
    });
};
