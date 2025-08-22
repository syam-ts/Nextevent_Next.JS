 
import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";
import { IBooking } from "../../../types/booking";

type ViewBookingPayload = {
    bookingId: string;
}

type ViewBookingResponse = {
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
