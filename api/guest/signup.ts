import axios from "axios"; 
import { config } from "../../utils/config";

type SignupPayload = {
    name: string;
    email: string;
    password: string;
    mobile: number;
    age: number;
};

type SignupResponse = {
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
