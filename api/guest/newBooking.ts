import axios from "axios";
import { IGuest } from "../../types/guest";
import { config } from "../../utils/config";
import { axiosInstanse } from "../../lib/axios/axiosInstance";

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
    success: string;
};

export const NewBooking = async (
    payload: NewBookingPayload
): Promise<NewBookingResponse> => {
    const { data } = await axiosInstanse.post("/booking/new", payload, {
        withCredentials: true,
    });
    return data;
};
