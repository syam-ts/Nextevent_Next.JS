import axios from "axios"; 
import { config } from "../../utils/config";
import { IOrganizer } from "../../types/organizer";

type LoginPayload = {
    email: string;
    password: string;
};

type LoginResponse = {
    accessToken: string;
    organizer: IOrganizer;
};

export const LoginOrganizer = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const { data } = await axios.post(
        `${config.backend_url}/organizer/login`,
        payload,
        {
            withCredentials: true,
        }
    );
    return data;
};
