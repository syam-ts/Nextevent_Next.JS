import { useMutation } from "@tanstack/react-query";
import { NewBooking } from "../../../api/guest/booking/newBooking";
import { IBooking } from "../../../types/booking";

type NewBookingPayload = {
    eventId: string;
    eventName: string;
} & Omit<IBooking, "_id" | "guestId" | "eventDetails" | "createdAt">;

export const useNewBooking = () => {
    return useMutation({
        mutationFn: (payload: NewBookingPayload) => NewBooking(payload),
    });
};
