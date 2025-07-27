import axios from "axios"; 
import { config } from "../../../utils/config";

type LoginPayload = {
    email: string;
    password: string;
};

type LoginResponse = {
    token: string;
    user: {
        id: string;
        role: string;
        email: string;
    };
};

export const LoginOrganizer = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const { data } = await axios.post(`${config.backend_url}/organizer/login`, payload);
    return data;
};
