import { useMutation } from "@tanstack/react-query";
import { SignupOrganizer } from "../../api/organizer/signup";
import { IOrganizer } from "../../types/organizer";

type SignupPayload = Pick<
    IOrganizer,
    "name" | "email" | "mobile" | "password" | "organizationName"
>;

export const useSignup = () => {
    return useMutation({
        mutationFn: (payload: SignupPayload) => SignupOrganizer(payload),
    });
};
