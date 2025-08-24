"use client";
import { useState } from "react";
import { IndianRupee, LocateFixedIcon } from "lucide-react";
import { Spinner } from "../../../components/lib/guest/Spinner";
import EventCard from "../../../components/guest/event/EventCard";
import { useGetAllEvents } from "../../../hooks/guest/useGetAllEvents";

const AllEventsPage = () => {
    
    const [filter, setFilter] = useState<string>("nearby");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isError, isLoading } = useGetAllEvents(filter, currentPage);

    if (!data) return;
    console.log(setCurrentPage);

    return (
        <div className="bg-white">
            {isLoading && <Spinner />}
            <div className="text-center mb-6">
                <h1 className="font-extrabold text-4xl text-orange-700 py-12">
                    All Events
                </h1>
            </div>

            <div className="flex gap-28">
                {/* Filter Section */}
                <div className="fixed z-10 bg-white ml-20 mt-44 pt-16 flex h-[calc(70vh-20rem)] flex-col rounded-2xl bg-clip-border px-8 text-gray-700 shadow-2xl ">
                    <nav className="flex min-w-[240px] flex-col gap-2 font-sans text-base font-medium text-blue-gray-700">
                        <div
                            onClick={() => setFilter("nearby")}
                            role="button"
                            className="flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-50 hover:shadow-md hover:text-blue-900"
                        >
                            <div className="p-2 bg-blue-100 rounded-full">
                                <LocateFixedIcon className="w-5 h-5 text-blue-700" />
                            </div>
                            <span>Nearby</span>
                        </div>

                        <div
                            onClick={() => setFilter("free")}
                            role="button"
                            className="flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-50 hover:shadow-md hover:text-green-900"
                        >
                            <div className="p-2 bg-green-100 rounded-full">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3706/3706340.png"
                                    className="w-5 h-5"
                                    alt="free-icon"
                                />
                            </div>
                            <span>Free</span>
                        </div>
                        <div
                            onClick={() => setFilter("paid")}
                            role="button"
                            className="flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-yellow-50 hover:shadow-md hover:text-yellow-900"
                        >
                            <div className="p-2 bg-yellow-100 rounded-full">
                                <IndianRupee className="w-5 h-5 text-yellow-700" />
                            </div>
                            <span>Paid</span>
                        </div>
                    </nav>
                </div>

                <div className="relative ml-[35rem]">
                    <EventCard data={data} isError={isError} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default AllEventsPage;
