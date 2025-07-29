import { useMutation } from "@tanstack/react-query";
import { NewBooking } from "../../api/guest/newBooking";

interface NewBookingPayload {
    eventId: string;
    eventName: string;
    isPaid: boolean;
    street: string;
    city: string;
     zipcode: number;
    numberOfSeats: number;
    total: number;
}

export const useNewBooking = () => {
    return useMutation({
        mutationFn: (payload: NewBookingPayload) => NewBooking(payload),
    });
};
