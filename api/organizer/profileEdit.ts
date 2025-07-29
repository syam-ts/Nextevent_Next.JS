import { axiosInstanse } from "../../lib/axios/axiosInstance";

  
type ProifleEditPayload = {
    name: string;
    mobile: number;
    organizationName: string;
};

type ProfileEditResponse = {
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

export const ProfileEditOrganizer = async (
    payload: ProifleEditPayload
): Promise<ProfileEditResponse> => {
    const { data } = await axiosInstanse.put("/organizer/update", payload, {
        withCredentials: true,
    });
    return data;
};
