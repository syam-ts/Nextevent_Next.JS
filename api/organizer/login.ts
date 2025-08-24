import axios from "axios";
import { getConfig } from "../../utils/config";
import { IOrganizer } from "../../types/organizer";
import { INotification } from "../../types/notification";

type LoginPayload = Pick<IOrganizer, "email" | "password">;

type LoginResponse = {
    accessToken: string;
    organizer: IOrganizer;
    notifications: INotification[];
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
