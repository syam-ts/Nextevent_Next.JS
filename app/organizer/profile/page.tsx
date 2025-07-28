"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const page = () => {
  const organizer = useSelector(
    (state: any) => state.organizer.currentOrganizer
  );

  return (
    <div className="bg-white h-screen">
      <div className="container mx-auto px-8 py-44 bg-white">
        <div className="border border-gray-300 rounded-2xl">
          <div className="h-44 w-44">
            <Image
              src="/logo.png"
              alt="logo"
              height={100}
              width={100}
              className="w-full h-full object-center"
            />
          </div>
          <div>
            <div className="flex justify-between gap-3 px-20">
              <div>
                <div className="blue-gray h-6 text-black font-extrabold">
                  {organizer.name}
                </div>
                <div className="font-normal text-gray-600">
                  {organizer.email}
                </div>
              </div>

              <div className="text-black grid">
                <p>{organizer.mobile}</p>
                <p>{organizer.organizationName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
