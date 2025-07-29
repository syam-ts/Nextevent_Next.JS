"use client";
import React from "react";
import { Calendar, Clock, MapPin, Users, Ticket } from "lucide-react";
import { useViewEvent } from "../../../../hooks/guest/useViewEvent";

const page = ({ params }: { params: any }) => {
    
    const { data, isError, isLoading } = useViewEvent(params.eventId);

    // const formatDate = (date: Date) => {
    //   return date.toLocaleDateString('en-US', {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    //   });
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br bg-white">
            <div className="px-6 lg:px-10 mx-auto flex flex-col gap-y-12 lg:flex-row items-center gap-x-12 justify-center py-12 lg:py-20 max-w-7xl">
                <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl text-indigo-900 md:text-5xl xl:text-[56px] leading-[1.1] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-bold tracking-tight">
                            {data?.event.eventName}
                        </h1>

                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full md:mx-auto lg:mx-0"></div>
                    </div>

                    <p className="text-lg md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-gray-700 leading-relaxed font-medium">
                        {data?.event.details}
                    </p>

                    <div className="space-y-4">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-1">
                                        Event Date
                                    </p>
                                    <p className="text-xl font-bold text-indigo-900">
                                        {data?.event.date.toString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-1">
                                        Event Time
                                    </p>
                                    <p className="text-xl font-bold text-indigo-900">
                                        {data?.event.startTime} - {data?.event.endTime}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-1">
                                        Location
                                    </p>
                                    <p className="text-xl font-bold text-indigo-900">
                                        {data?.event.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-1">
                                        Available Seats
                                    </p>
                                    <p className="text-xl font-bold text-indigo-900">
                                        {data?.event.totalSeats} seats
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 flex items-center justify-center gap-3">
                            <Ticket className="w-6 h-6" />
                            Register Now
                        </button>
                    </div>
                </div>

                <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 relative isolate z-10">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-indigo-600/10 z-10"></div>

                        <img
                            className="rounded-3xl w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Event"
                        />

                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-indigo-100 z-20">
                            <span className="text-indigo-700 font-bold text-sm">
                                Premium Event
                            </span>
                        </div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full opacity-20 -z-10"></div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-full opacity-30 -z-10"></div>
                </div>
            </div>
        </div>
    );
};

export default page;
