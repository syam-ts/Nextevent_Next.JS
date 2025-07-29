import { useMutation } from "@tanstack/react-query"; 
import { LoginGuest } from "../../api/guest/login";

type LoginPayload = {
    email: string;
    password: string;
};

export const useLogin = () => {
    return useMutation({
        mutationFn: (payload: LoginPayload) => LoginGuest(payload),
    });
};
