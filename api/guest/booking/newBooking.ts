import { IBooking } from "../../../types/booking";
import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";

type NewBookingPayload = {
    eventId: string;
    eventName: string;
} & Omit<IBooking, "_id" | "guestId" | "eventDetails" | "createdAt">;

type NewBookingResponse = {
    result: {
        id: string;
    };
};

export const NewBooking = async (
    payload: NewBookingPayload
): Promise<NewBookingResponse> => {
    const { data } = await axiosInstanseGuest.post("/booking/payment", payload, {
        withCredentials: true,
    });
    return data;
};
