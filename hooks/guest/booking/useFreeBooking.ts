import { useMutation } from "@tanstack/react-query";
import { FreeBooking } from "../../../api/guest/booking/freeBooking";
import { IBooking } from "../../../types/booking";

type FreeBookingPayload = {
    eventId: string;
    eventName: string;
} & Omit<IBooking, "_id" | "guestId" | "eventDetails" | "createdAt">;

export const useFreeBooking = () => {
    return useMutation({
        mutationFn: (payload: FreeBookingPayload) => FreeBooking(payload),
    });
};
