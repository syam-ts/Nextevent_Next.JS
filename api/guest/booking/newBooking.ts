import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";

type NewBookingPayload = {
    eventId: string;
    eventName: string;
    isPaid: boolean;
    street: string;
    city: string;
    zipcode: number;
    numberOfSeats: number;
    total: number;
};

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
