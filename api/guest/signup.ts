import axios from "axios"; 
import { config } from "../../utils/config";

interface SignupPayload {
    name: string;
    email: string;
    password: string;
    mobile: number;
    age: number;
};

interface SignupResponse {
  success: boolean;
};

export const SignupGuest = async (
  payload: SignupPayload
): Promise<SignupResponse> => {
  const { data } = await axios.post(
    `${config.backend_url}/guest/signup`,
    payload,
    {
      withCredentials: true,
    }
  );
  return data;
};
