import React from "react";
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    DollarSign,
    Eye, 
} from "lucide-react";
import Link from "next/link";

interface IEvent {
    _id: string;
    organizerId: string;
    eventName: string;
    eventImage: string;
    location: string;
    date: Date;
    startTime: string;
    endTime: string;
    totalSeats: number;
    isPaid: boolean;
    details: string;
}

interface IEventCardProp {
    events: IEvent[];
}

const EventCard = ({
    data,
    isError,
    isLoading,
}: {
    data: IEventCardProp;
    isError: any;
    isLoading: any;
}) => {
    const handleViewDetails = (eventId: string) => {
        alert(`Navigating to event details: ${eventId}`);
    };
 

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const formatTime = (time: string) => {
        return time || "TBD";
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading events...</p>
                </div>
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-red-600 text-2xl">⚠</span>
                    </div>
                    <p className="text-red-600 text-lg font-medium">
                        Failed to load events
                    </p>
                    <p className="text-gray-500 mt-2">Please try again later</p>
                </div>
            </div>
        );
    }

    if (data.events.length === 0) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-lg font-medium">No events found</p>
                    <p className="text-gray-500 mt-2">
                        Check back later for upcoming events
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid gap-8 mt-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 max-w-6xl mx-auto px-4">
            {data.events.map((event: IEvent, index: number) => (
                <article
                    key={event._id || index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-[1.02]"
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-80 relative overflow-hidden py-12">
                            <div className="aspect-video lg:aspect-square relative">
                                <img
                                    src={event.eventImage || "/organizer/event-1.jpg"}
                                    alt={event.eventName}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${event.isPaid
                                                ? "bg-amber-100/90 text-amber-800 border border-amber-200"
                                                : "bg-green-100/90 text-green-800 border border-green-200"
                                            }`}
                                    >
                                        <DollarSign className="w-3 h-3 mr-1" />
                                        {event.isPaid ? "Paid" : "Free"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-6 lg:p-8 flex flex-col">
                            <div className="flex-1">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {event.eventName}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                    {event.details}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center text-gray-700">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
                                            <MapPin className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">
                                                Location
                                            </p>
                                            <p className="text-gray-900 font-semibold">
                                                {event.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-700">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
                                            <Calendar className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Date</p>
                                            <p className="text-gray-900 font-semibold">
                                                {formatDate(event.date)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-700">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
                                            <Clock className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Time</p>
                                            <p className="text-gray-900 font-semibold">
                                                {formatTime(event.startTime)} -{" "}
                                                {formatTime(event.endTime)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-700">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
                                            <Users className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Seats</p>
                                            <p className="text-gray-900 font-semibold">
                                                {event.totalSeats} available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-gray-100">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <span className="text-sm text-gray-500">125 interested</span>
                                </div>

                                <Link
                                     href={`/organizer/event/${event._id}`}
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
                                >
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default EventCard;
