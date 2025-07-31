import React, { useState } from "react";
import { IBooking } from "../../../types/booking";
import {
    MapPin,
    Calendar,
    Users,
    CreditCard,
    Download,
    Edit3,
} from "lucide-react";
import { useCancelBooking } from "../../../hooks/guest/booking/useCancelBooking";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Spinner } from "../../lib/guest/Spinner";
import { CancelConfirmModal } from "../modal/CancelConfirmModal";

interface BookingPageProps {
    booking: IBooking | undefined;
}

const BookingPage: React.FC<BookingPageProps> = ({ booking }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
    const { mutate } = useCancelBooking();
    const router = useRouter();

    const handleDownloadTicket = (): void => {
        alert("Downloading ticket...");
    };


    const cancelBooking = (): void => {
        setLoadingSpinner(true);
        mutate(
            {
                bookingId: booking?._id as string,
            },
            {
                onSuccess: async (data) => {
                    setLoadingSpinner(false);
                    router.push("/guest/my-bookings");
                },
                onError(error: unknown) {
                    const err = error as { response: { data: { message: string } } };
                    setLoadingSpinner(false);
                    toast.error(err.response.data.message);
                },
            }
        );
    };

    
    return (
        <div className="p-8">
            {loadingSpinner && <Spinner />}
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">
                        {booking?.eventDetails.eventName}
                    </h2>
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        {booking?._id}
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center text-gray-600 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Booking Date</span>
                        </div>
                        <p className="text-gray-900 font-semibold">{booking?.createdAt}</p>
                        <p className="text-gray-500 text-sm">at {booking?.createdAt}</p>
                    </div>

                    <div>
                        <div className="flex items-center text-gray-600 mb-2">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Number of Seats</span>
                        </div>
                        <p className="text-gray-900 font-semibold text-2xl">
                            {booking?.numberOfSeats}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                            Address
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700 leading-relaxed">
                                {booking?.street}
                                <br />
                                {booking?.city}, {booking?.zipcode}
                            </p>
                        </div>
                        <button className="mt-3 text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center">
                            <Edit3 className="w-4 h-4 mr-1" />
                            Edit Address
                        </button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Guest Information
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Guest ID
                                </label>
                                <p className="text-gray-900 font-mono text-sm bg-gray-50 px-3 py-2 rounded-lg mt-1">
                                    {booking?.guestId}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <CreditCard className="w-5 h-5 mr-2 text-orange-600" />
                            Payment Details
                        </h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Payment Status</span>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${booking?.isPaid
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                        }`}
                                >
                                    {booking?.isPaid ? "Paid" : "Pending"}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Number of Seats</span>
                                <span className="text-gray-900 font-semibold">
                                    {booking?.numberOfSeats}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Price per Seat</span>
                                <span className="text-gray-900 font-semibold">
                                    ₹
                                    {Math.floor(
                                        (booking?.total as number) /
                                        (booking?.numberOfSeats as number)
                                    )}
                                </span>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-gray-900">
                                        Total Amount
                                    </span>
                                    <span className="text-2xl font-bold text-orange-600">
                                        ₹{booking?.total.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Event Details
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Event ID
                                </label>
                                <p className="text-gray-900 font-mono text-sm bg-gray-50 px-3 py-2 rounded-lg mt-1">
                                    {booking?.eventDetails._id}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Booking ID
                                </label>
                                <p className="text-gray-900 font-mono text-sm bg-gray-50 px-3 py-2 rounded-lg mt-1">
                                    {booking?._id}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                <CancelConfirmModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    cancelBookingFn={cancelBooking}
                />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex-1 py-3 px-6 border cursor-pointer border-gray-300 rounded-xl text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
                >
                    Cancel Booking
                </button>

                <button
                    onClick={handleDownloadTicket}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-base font-semibold rounded-xl hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center"
                >
                    <Download className="w-5 h-5 mr-2" />
                    Download Ticket
                </button>
            </div>
        </div>
    );
};

export default BookingPage;
