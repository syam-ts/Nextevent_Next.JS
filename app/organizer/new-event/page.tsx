"use client";
import Image from "next/image";
import React, { useState } from "react";

interface IEvent {
  //  organizerId: string,
  eventName: string;
  eventImage: string;
  location: string;
  date: string;
  time: string;
  totalSeats: number;
  isPaid: boolean;
  details: string;
}

const page = () => {
  const [formData, setFormData] = useState<IEvent>({
    eventName: "",
    eventImage: "",
    location: "",
    date: "",
    time: "",
    totalSeats: 0,
    isPaid: false,
    details: "",
  });

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white w-full h-screen overflow-y-hidden">
      <div className="flex justify-between items-start">
        <div className="w-2/4 flex flex-wrap gap-12 mt-44 px-32">
          <div className="flex gap-5">
            <div className="grid gap-2">
              <label className="text-black">Event Name</label>
              <div className="w-full flex gap-5 max-w-sm min-w-[25rem]">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Event Name"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-black">Event Image</label>
              <div className="w-full flex gap-5 max-w-sm min-w-[25rem]">
                <input
                  type="image"
                  name="eventImage"
                  onChange={(e) => handleChange(e)}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Event Name"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="grid gap-2">
              <label className="text-black">Location</label>
              <div className="w-full flex gap-5 max-w-sm min-w-[25rem]">
                <input
                  type="text"
                  name="location"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Location"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-black">Date</label>
              <div className="w-full flex gap-5 max-w-sm min-w-[25rem]">
                <input
                  type="date"
                  name="date"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Event Name"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="grid gap-2">
              <label className="text-black">Time Between</label>
              <div className="w-full flex gap-5 max-w-sm min-w-[25rem]">
                <input
                  type="text"
                  name="time"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Event Name"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-black">Total Seats</label>
              <div className="w-full flex gap-5 max-w-sm min-w-[25rem]">
                <input
                  type="number"
                  name="totalSeats"
                  max={2000}
                  min={100}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Event Name"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="grid gap-2">
              <label className="text-black">Paid</label>

              <div className="w-full max-w-sm min-w-[25rem]">
                <div className="relative">
                  <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-black">Details</label>
              <div className="w-full flex gap-5 max-w-sm min-w-[25rem]">
                <input
                  type="text"
                  name="details"
                  className="w-full bg-transparent py-12 placeholder:text-slate-400 text-slate-700 text-sm border border-black/30 px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Details"
                />
              </div>
            </div>
          </div>

          <div className="justify-center mx-auto pl-16">
            <button
              className=" font-extrabold py-2 px-44 border  text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Create
            </button>
          </div>
        </div>

        <div className="md:col-span-3 overflow-hidden w-3/7">
          <Image
            src="/organizer/new-event.jpg"
            alt="event-image"
            height={20}
            objectFit="fill"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
