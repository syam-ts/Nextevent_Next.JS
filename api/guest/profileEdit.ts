import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";

  
interface ProifleEditPayload {
    name: string;
    profilePicture: string;
    mobile: number;
    age: number;
};

interface ProfileEditResponse {
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
        createdAt: string;
    };
};

export const ProfileEditGuest = async (
    payload: ProifleEditPayload
): Promise<ProfileEditResponse> => {
    const { data } = await axiosInstanseGuest.put("/guest/update", payload, {
        withCredentials: true,
    });
    return data;
};
