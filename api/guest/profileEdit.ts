import { axiosInstanse } from "../../lib/axios/axiosInstance"; 

type ProifleEditPayload = {
    name: string;
    profilePicture: string;
    mobile: number;
    age: number;
};

type ProfileEditResponse = {
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

export const ProfileEditGuest = async (
    payload: ProifleEditPayload
): Promise<ProfileEditResponse> => {
    const { data } = await axiosInstanse.put("/guest/update", payload, {
        withCredentials: true,
    });
    return data;
};
