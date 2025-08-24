import { useMutation } from "@tanstack/react-query"; 
import { SignupGuest } from "../../api/guest/signup";
import { IGuest } from "../../types/guest"; 

type SignupPayload = Pick<IGuest, 'name' |'email'|'password'|'mobile'|'location'>;

export const useSignup = () => {
    return useMutation({
        mutationFn: (payload: SignupPayload) => SignupGuest(payload),
    });
};
