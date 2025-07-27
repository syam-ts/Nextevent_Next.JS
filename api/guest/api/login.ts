import axios from "axios"; 
import { config } from "../../../utils/config";

type LoginPayload = {
    email: string;
    password: string;
};

type LoginResponse = {
    accessToken: string;
    user: {
        id: string;
        role: string;
        email: string;
    };
};

export const LoginGuest = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const { data } = await axios.post(`${config.backend_url}/guest/login`, payload, {
        withCredentials: true
    });
    return data;
};
