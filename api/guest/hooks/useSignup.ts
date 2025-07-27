import { useMutation } from "@tanstack/react-query";
import { SignupGuest } from "../api/signup";

type SignupPayload = {
    name: string;
    email: string;
    password: string;
    mobile: number;
    age: number;
};

export const useSignup = () => {
    return useMutation({
        mutationFn: (payload: SignupPayload) => SignupGuest(payload),
    });
};
