import axios from "axios";
import { getConfig } from "../../utils/config";

type SignupPayload = {
    name: string;
    email: string;
    mobile: number;
    password: string;
    organizationName: string;
};

type SignupReponse = {
    success: boolean;
};

export const SignupOrganizer = async (
    payload: SignupPayload
): Promise<SignupReponse> => {
    
    const { backend_url } = getConfig();
    const { data } = await axios.post(
        `${backend_url}/organizer/signup`,
        payload,
        {
            withCredentials: true,
        }
    );
    return data;
};
