import { axiosInstanseOrganizer } from "../../lib/axios/organizer/axiosInstance";
import { IOrganizer } from "../../types/organizer";

type ProifleEditPayload = {
    name: string;
    mobile: number;
    organizationName: string;
};

type Organizer = {
    organizer: IOrganizer;
};

type ProfileEditResponse = Organizer;

export const ProfileEditOrganizer = async (
    payload: ProifleEditPayload
): Promise<ProfileEditResponse> => {
    const { data } = await axiosInstanseOrganizer.put(
        "/organizer/update",
        payload,
        {
            withCredentials: true,
        }
    );
    return data;
};
