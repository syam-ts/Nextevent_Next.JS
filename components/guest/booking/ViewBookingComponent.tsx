"use client";
import React from "react";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useViewBooking } from "../../../hooks/guest/booking/useVIewBooking";
import BookingPage from "./BookingPage";

interface ViewBookingComponentProps {
    bookingId: string;
}

const ViewBookingComponent: React.FC<ViewBookingComponentProps> = ({
    bookingId,
}) => {

    const { data } = useViewBooking(bookingId);

    const handleDownloadTicket = (): void => {
        alert("Downloading ticket...");
    };

    
    const handleShareBooking = (): void => {
        if (navigator.share) {
            navigator.share({
                title: `Booking for ${data?.booking.eventDetails.eventName}`,
                text: `My booking confirmation for ${data?.booking.eventDetails.eventName}`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Booking link copied to clipboard!");
        }
    };

    return (
        <div className="min-h-screen w-full p-4 lg:p-8 bg-white">
            <div className="w-full max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <button className="flex items-center text-white hover:text-orange-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        <span className="font-medium">Back to Bookings</span>
                    </button>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleShareBooking}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleDownloadTicket}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors flex items-center"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                        </button>
                    </div>
                </div>

                <div
                    className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                   
                >
                    <div className="bg-gradient-to-r  px-8 py-6">
                        <h1 className="text-2xl text-orange-500 font-bold mb-2">
                            Booking Details
                        </h1>
                    </div>

                    <BookingPage booking={data?.booking} />
                </div>
            </div>

            <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default ViewBookingComponent;
