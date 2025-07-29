"use client";
import React from "react";
import BookingCard from "./BookingCard";

const page: React.FC = () => {
    return (
        <div className="min-h-screen bg-white w-full p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-black text-center mb-12">
                    Bookings
                </h1>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                     
                       {/* <BookingCard />   */}
              
                </div>
            </div>
        </div>
    );
};

export default page;
