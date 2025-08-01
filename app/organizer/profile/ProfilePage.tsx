"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Mail, Phone, Building2, User } from "lucide-react";
import { IOrganizerState } from "../../../types/slice-states/organizerState";

const ProfilePage = () => {

    const organizer = useSelector(
        (state: IOrganizerState) => state.organizer.currentOrganizer
    );

    return (
        <div className="min-h-screen w-full flex items-center bg-white justify-center p-4 lg:p-8">
            <div className="w-full max-w-2xl mx-auto">
                <div
                    className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 transform transition-all duration-300 hover:scale-[1.02]"
                >
                    <div className="text-center mb-8">
                        <div className="relative mx-auto mb-6">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                                <User className="w-16 h-16 text-white" />
                            </div>
                            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                            Profile Overview
                        </h1>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Manage your account information
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200 transition-all duration-200 hover:shadow-lg">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-indigo-700 mb-1">
                                        Full Name
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                        {organizer?.name}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 transition-all duration-200 hover:shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-blue-700 mb-1">
                                            Email Address
                                        </p>
                                        <p className="text-base font-medium text-gray-900 truncate">
                                            {organizer?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200 transition-all duration-200 hover:shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-green-700 mb-1">
                                            Phone Number
                                        </p>
                                        <p className="text-base font-medium text-gray-900">
                                            {organizer?.mobile}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 transition-all duration-200 hover:shadow-lg">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <Building2 className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-orange-700 mb-1">
                                        Organization
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                        {organizer?.organizationName}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col text-center sm:flex-row gap-4">
                        <Link
                            href="/organizer/profile/edit"
                            className="flex-1 py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Edit Profile
                        </Link>
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

export default ProfilePage;
