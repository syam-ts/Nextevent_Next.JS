import { axiosInstanse } from "../../../lib/axios/axiosInstance";
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
    const { data } = await axiosInstanse.get(
        `/booking/view/${payload.bookingId}`
    );
    return data;
};
