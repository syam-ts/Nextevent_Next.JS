import { useMutation } from "@tanstack/react-query";
import { FreeBooking } from "../../../api/guest/booking/freeBooking";

interface FreeBookingPayload {
    eventId: string;
    eventName: string;
    isPaid: boolean;
    street: string;
    city: string;
    zipcode: number;
    numberOfSeats: number;
    total: number;
}

export const useFreeBooking = () => {
    return useMutation({
        mutationFn: (payload: FreeBookingPayload) => FreeBooking(payload),
    });
};
