import axios from "axios";
import { config } from "../../../utils/config";

type LoginPayload = {
    email: string;
    password: string;
};

type LoginResponse = {
    accessToken: string;
    guest: {
        _id: string;
        name: string;
        email: string;
        password: string;
        mobile: number;
        age: number;
        numberOfEventsAttended: number;
        wallet: any;
        // events: IEvent,
        createdAt: Date;
    };
};

export const LoginGuest = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const { data } = await axios.post(
        `${config.backend_url}/guest/login`,
        payload,
        {
            withCredentials: true,
        }
    );
    return data;
};
