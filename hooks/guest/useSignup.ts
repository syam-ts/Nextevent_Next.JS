import { useMutation } from "@tanstack/react-query"; 
import { SignupGuest } from "../../api/guest/signup";

type SignupPayload = {
    name: string;
    email: string;
    password: string;
    mobile: number;
    location: string;
};

export const useSignup = () => {
    return useMutation({
        mutationFn: (payload: SignupPayload) => SignupGuest(payload),
    });
};
