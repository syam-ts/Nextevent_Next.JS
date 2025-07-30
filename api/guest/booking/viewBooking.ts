 import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";
import { IBooking } from "../../../types/booking";

interface ViewBookingPayload {
    bookingId: string;
}

interface ViewBookingResponse {
    booking: IBooking;
}

export const ViewBooking = async (
    payload: ViewBookingPayload
): Promise<ViewBookingResponse> => {
    const { data } = await axiosInstanseGuest.get(
        `/booking/view/${payload.bookingId}`
    );
    return data;
};
