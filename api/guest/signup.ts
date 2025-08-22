import axios from "axios";
import { getConfig } from "../../utils/config";
import { IGuest } from "../../types/guest";

type SignupPayload = Pick<
  IGuest,
  "name" | "email" | "password" | "mobile" | "location"
>;

type SignupResponse = {
  success: boolean;
}

export const SignupGuest = async (
  payload: SignupPayload
): Promise<SignupResponse> => {
  const { backend_url } = getConfig();
  const { data } = await axios.post(`${backend_url}/guest/signup`, payload, {
    withCredentials: true,
  });
  return data;
};
