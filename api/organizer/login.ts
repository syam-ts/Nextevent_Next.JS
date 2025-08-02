import axios from "axios";
import { getConfig } from "../../utils/config";
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
    const { backend_url } = getConfig();
    const { data } = await axios.post(`${backend_url}/organizer/login`, payload, {
        withCredentials: true,
    });
    return data;
};
