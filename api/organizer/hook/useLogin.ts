import { useMutation } from "@tanstack/react-query";
import { LoginOrganizer } from "../api/login";

type LoginPayload = {
    email: string;
    password: string;
};

export const useLogin = () => {
    return useMutation({
        mutationFn: (payload: LoginPayload) => LoginOrganizer(payload),
    });
};
