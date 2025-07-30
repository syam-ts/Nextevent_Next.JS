"use client";
import React from "react";
import { Plus, Settings, Eye, Calendar, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const ModernEventTypes = () => {
    const eventActions = [
        {
            title: "New Event",
            url: "/organizer/new-event",
            description:
                "Create amazing events that bring people together and create lasting memories",
            buttonText: "Create New Event",
            icon: Plus,
            gradient: "from-emerald-500 to-emerald-600",
            bgGradient: "from-emerald-50 to-emerald-100",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
        },
        {
            title: "Manage Events",
            url: "/organizer/all-events",
            description:
                "Take control of your events with powerful management tools and insights",
            buttonText: "Manage Events",
            icon: Settings,
            gradient: "from-indigo-500 to-indigo-600",
            bgGradient: "from-indigo-50 to-indigo-100",
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-600",
        },
        {
            title: "View My Events",
            url: "/organizer/my-events",
            description:
                "Browse through all your created events and track their performance",
            buttonText: "View Events",
            icon: Eye,
            gradient: "from-purple-500 to-purple-600",
            bgGradient: "from-purple-50 to-purple-100",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
        },
    ];

    return (
        <div className="relative min-h-screen w-full py-20 lg:py-32 bg-white">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mb-8 shadow-lg">
                        <Calendar className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                        Event Actions
                    </h2>
                    <p className="text-xl text-indigo-600 max-w-3xl mx-auto leading-relaxed">
                        Events are made to create memorable emotions and experiences. Make
                        them extraordinary with our comprehensive event management platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventActions.map((action, index) => {
                        const IconComponent = action.icon;
                        return (
                            <div
                                key={index}
                                className="group"
                                style={{
                                    animation: `slideUp 0.6s ease-out ${index * 0.2}s both`,
                                }}
                            >
                                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 h-full flex flex-col hover:transform hover:scale-[1.02] transition-all duration-300">
                                    <div className="text-center mb-6">
                                        <div
                                            className={`mx-auto w-16 h-16 ${action.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <IconComponent
                                                className={`w-8 h-8 ${action.iconColor}`}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {action.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {action.description}
                                        </p>
                                    </div>

                                    <div className="relative mb-6 flex-1 flex items-center justify-center">
                                        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden relative group-hover:shadow-lg transition-shadow duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-gray-500 text-sm">Event Preview</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <Sparkles className="w-6 h-6 text-indigo-400 opacity-60" />
                                            </div>
                                            <div className="absolute bottom-4 left-4">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-60"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href={`${action.url}`}
                                        className={`w-full py-4 text-center bg-gradient-to-r ${action.gradient} text-white font-semibold rounded-xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-[1.02] group-hover:shadow-xl`}
                                    >
                                        {action.buttonText}
                                    </Link>

                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden rounded-2xl">
                                        <div
                                            className={`w-full h-full bg-gradient-to-br ${action.bgGradient} transform rotate-45 translate-x-8 -translate-y-8`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-16 bg-indigo-600 rounded-2xl">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to get started?
                        </h3>
                        <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
                            Join thousands of event organizers who trust our platform to
                            create unforgettable experiences for their communities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/orgnizer/new-event"
                                className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 transform hover:scale-[1.02]"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="/organizer/about"
                                className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
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

export default ModernEventTypes;
