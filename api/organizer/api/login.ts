import axios from "axios";
import { config } from "../../../utils/config";

type LoginPayload = {
    email: string;
    password: string;
};

type LoginResponse = {
    accessToken: string;
    organizer: {
        _id: string;
        name: string;
        email: string;
        mobile: number;
        password: string;
        role: string;
        organizationName: string;
        createdEvents: [];
        createdAt: Date;
    };
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
