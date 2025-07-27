"use client";
import React from "react";
import { useGetMyEvents } from "../../api/organizer/hook/useGetMyEvents";

const EventCard = () => {
    const { data, isLoading, isError } = useGetMyEvents();

    if (isLoading)
        return <p className="text-center text-gray-600">Loading events...</p>;
    if (isError || !data)
        return <p className="text-center text-red-500">Failed to load events.</p>;
    if (data.events.length === 0)
        return <p className="text-center text-gray-500">No events found.</p>;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {data.events.map((event, index) => (
                <div
                    key={index}
                    className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-200"
                >
                    <img
                        src={
                            event.eventImage ||
                            "https://via.placeholder.com/300x200?text=No+Image"
                        }
                        alt={event.eventName}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-gray-800">
                            {event.eventName}
                        </h2>
                        <p className="text-sm text-gray-600">{event.location}</p>
                        <p className="text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString()} • {event.startTime} -{" "}
                            {event.endTime}
                        </p>
                        <p className="text-sm">
                            <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${event.isPaid
                                        ? "bg-green-100 text-green-700"
                                        : "bg-blue-100 text-blue-700"
                                    }`}
                            >
                                {event.isPaid ? "Paid" : "Free"}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCard;
