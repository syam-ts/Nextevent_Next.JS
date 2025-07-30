import { useMutation } from "@tanstack/react-query";
import { CancelBooking } from "../../../api/guest/booking/cancelBooking";

interface Payload {
    bookingId: string
}

export const useCancelBooking = () => {
    return useMutation({
        mutationFn: (payload: Payload) => CancelBooking(payload),
    });
};
