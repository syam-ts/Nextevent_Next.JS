"use client";
import dayjs from "dayjs";
import React from "react";
import { IOrganizer } from "../../../types/organizer";
import { User, Mail, Phone, Calendar } from "lucide-react";
import { useGetAllOrganizers } from "../../../hooks/guest/useGetAllOrganizers";
import Link from "next/link";

const AllOrganizers = () => {

  const { data } = useGetAllOrganizers();
  if (!data) return;

  const { organizers }: { organizers: IOrganizer[] } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {organizers?.map((organizer: IOrganizer, index: number) => (
        <article
          key={index}
          className="bg-white rounded-2xl shadow-lg my-12 hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-[1.02]"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-6 lg:p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {organizer.organizationName}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional event organizer with expertise in creating
                  memorable experiences. Specialized in corporate events,
                  conferences, and community gatherings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <p className="text-gray-900 font-semibold">
                        {organizer.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Mobile
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {organizer.mobile}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-3">
                      <Calendar className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Events Created
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {organizer.totalEventsCreated} events
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Since</p>
                      <p className="text-gray-900 font-semibold">
                        {/* {organizer.since} use of dayjs */}
                        {dayjs(organizer.createdAt).format("MMMM YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex gap-3">
                  <Link href={`/guest/organizers/events/${organizer._id}`} className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-105 shadow-lg">
                    <User className="w-4 h-4 mr-2" />
                    View Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AllOrganizers;
