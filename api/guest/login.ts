import axios from "axios";
import { IGuest } from "../../types/guest";
import { getConfig } from "../../utils/config";

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    accessToken: string;
    guest: IGuest;
}

export const LoginGuest = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const { backend_url } = getConfig();

    const { data } = await axios.post(`${backend_url}/guest/login`, payload, {
        withCredentials: true,
    });
    return data;
};
