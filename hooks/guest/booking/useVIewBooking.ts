import { useQuery } from "@tanstack/react-query";
import { ViewBooking } from "../../../api/guest/booking/viewBooking";

export const useViewBooking = (bookingId: string) => {
    return useQuery({
        queryKey: ["booking"],
        queryFn: () => ViewBooking({ bookingId }),
    });
};
