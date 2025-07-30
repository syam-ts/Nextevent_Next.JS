import { axiosInstanse } from "../../../lib/axios/axiosInstance";

interface CancelBookingPayload {
    bookingId: string;
}

interface CancelBookingReponse {
    success: boolean;
}

export const CancelBooking = async (
    payload: CancelBookingPayload
): Promise<CancelBookingReponse> => {
    const { data } = await axiosInstanse.delete(
        `/booking/cancel/${payload.bookingId}`
    );

    return data;
};
