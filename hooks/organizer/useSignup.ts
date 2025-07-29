import { useMutation } from "@tanstack/react-query";
import { SignupOrganizer } from "../../api/organizer/api/signup";

type SignupPayload = {
    name: string;
    email: string;
    mobile: number;
    password: string;
    organizationName: string;
};

export const useSignup = () => {
   return useMutation({
        mutationFn: (payload: SignupPayload) => SignupOrganizer(payload),
    });
};
