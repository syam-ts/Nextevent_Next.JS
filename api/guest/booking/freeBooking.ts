import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";

type FreeBookingPayload = {
    eventId: string;
    eventName: string;
    isPaid: boolean;
    street: string;
    city: string;
    zipcode: number;
    numberOfSeats: number;
    total: number;
}
 

type FreeBookingResponse = {
    success: boolean;
}

export const FreeBooking = async (
    payload: FreeBookingPayload
): Promise<FreeBookingResponse> => {
    console.log('ENTIRE PAYLOAD: ',payload.eventId)
    const { data } = await axiosInstanseGuest.post("/booking/free", payload);
    return data;
};
