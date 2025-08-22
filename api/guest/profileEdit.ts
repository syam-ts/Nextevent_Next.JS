import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";
import { IGuest } from "../../types/guest";

type ProifleEditPayload = Pick<
    IGuest,
    "name" | "profilePicture" | "mobile" | "location"
>;

type ProfileEditResponse = {
    guest: {
        _id: string;
        name: string;
        email: string;
        password: string;
        mobile: number;
        location: string;
        numberOfEventsAttended: number;
        wallet: any;
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
