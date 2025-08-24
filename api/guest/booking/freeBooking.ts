import { IBooking } from "../../../types/booking";
import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";

type FreeBookingPayload = {
    eventId: string;
    eventName: string;
} & Omit<IBooking, "_id" | "guestId" | "eventDetails" | "createdAt">;

type FreeBookingResponse = {
    success: boolean;
};

export const FreeBooking = async (
    payload: FreeBookingPayload
): Promise<FreeBookingResponse> => {
    console.log("ENTIRE PAYLOAD: ", payload.eventId);
    const { data } = await axiosInstanseGuest.post("/booking/free", payload);
    return data;
};
