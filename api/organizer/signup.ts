import axios from "axios";
import { getConfig } from "../../utils/config";
import { IOrganizer } from "../../types/organizer";

type SignupPayload = Pick<
    IOrganizer,
    "name" | "email" | "mobile" | "password" | "organizationName"
>;

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
