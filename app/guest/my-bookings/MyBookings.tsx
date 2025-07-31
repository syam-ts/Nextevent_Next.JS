"use client";
import React from "react";
import { useGetMyBookings } from "../../../hooks/guest/booking/useGetMyBookings";
import BookingCard from "../../../components/guest/booking/BookingCard";

const MyBookings: React.FC = () => {
    const { data } = useGetMyBookings();

    return (
        <div className="min-h-screen bg-white w-full p-8 pt-20">
            <div className="w-2/3 mx-auto">
                <h1 className="text-3xl font-bold text-orange-500 text-center mb-12">
                    Bookings
                </h1>

                {data?.bookings.length === 0 ? (
                    <div className="text-orange-500 text-center py-44">
                        No Bookings Found
                    </div>
                ) : (
                    <div>
                        <BookingCard bookings={data?.bookings} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookings;
