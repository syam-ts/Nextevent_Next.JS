import { useMutation } from "@tanstack/react-query";
import { LoginAdmin } from "../../api/admin/login";
import { IAdmin } from "../../types/admin";

type SignupPayload = Pick<IAdmin, "userName" | "password">;

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: SignupPayload) => LoginAdmin(payload),
  });
};
