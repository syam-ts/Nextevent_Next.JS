import { axiosInstanse } from "../../../lib/axios/axiosInstance";
 

interface NewBookingPayload {
    eventId: string;
    eventName: string;
    isPaid: boolean;
    street: string;
    city: string;
     zipcode: number;
    numberOfSeats: number;
    total: number;
};

interface NewBookingResponse {
    result: {
        id: string
    }
};

export const NewBooking = async (
    payload: NewBookingPayload
): Promise<NewBookingResponse> => {
    const { data } = await axiosInstanse.post("/booking/payment", payload, {
        withCredentials: true,
    });
    return data;
};
