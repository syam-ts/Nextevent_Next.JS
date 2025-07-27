import axios from "axios";
import { config } from "../../../utils/config";

type SignupPayload = {
    name: string;
    email: string;
    mobile: number;
    password: string;
    organizationName: string;
};

type SignupReponse = {
    success: boolean
}

export const SignupOrganizer = async (
    payload: SignupPayload
): Promise<SignupReponse> => {
    const { data } = await axios.post(
        `${config.backend_url}/organizer/signup`,
        payload,
        {
            withCredentials: true,
        }
    );
    return data;
};
