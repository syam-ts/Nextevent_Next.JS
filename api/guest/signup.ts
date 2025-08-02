import axios from "axios";
import { getConfig } from "../../utils/config";

interface SignupPayload {
  name: string;
  email: string;
  password: string;
  mobile: number;
  location: string;
}

interface SignupResponse {
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
