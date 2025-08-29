import axios from "axios"; 
import { getConfig } from "../../utils/config";
import { IAdmin } from "../../types/admin";

type LoginPayload = Pick<IAdmin, "userName" | "password">;

type LoginResponse = {
    accessToken: string;
    admin: IAdmin;
};

export const LoginAdmin = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const { backend_url } = getConfig();

    const { data } = await axios.post(`${backend_url}/admin/login`, payload, {
        withCredentials: true,
    });
    return data;
};
