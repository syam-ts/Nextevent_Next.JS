import { useMutation } from "@tanstack/react-query"; 
import { LoginOrganizer } from "../../api/organizer/login";
import { IOrganizer } from "../../types/organizer";

type LoginPayload = Pick<IOrganizer, 'email'|'password'>;

export const useLogin = () => {
    return useMutation({
        mutationFn: (payload: LoginPayload) => LoginOrganizer(payload),
    });
};
