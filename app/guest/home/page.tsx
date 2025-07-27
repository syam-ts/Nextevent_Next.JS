import React from "react";
import QuickStats from "../../../components/guest/QuickStats";

const page = () => {
    return (
        <div>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
                <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6 ">
                    <div className="max-w-prose text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Understand user flow and
                            <strong className="text-indigo-600"> increase </strong>
                            conversions
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                            nisi. Natus, provident accusamus impedit minima harum corporis
                            iusto.
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>


                     <QuickStats />



            <section className="py-10 bg-white justify-center mx-auto ">
                <div className="text-center mb-6">
                    <h1 className="font-extrabold text-4xl text-indigo-700 py-12">
                        Latest Events
                    </h1>
                </div>

                <article className="flex w-2/3 justify-center mx-auto flex-col sm:flex-row bg-white  shadow-md ring-1 ring-indigo-100 overflow-hidden">
                    <img
                        src="/organizer/event-1.jpg"
                        alt="Event"
                        className="w-full sm:w-[20rem] h-60 object-cover"
                    />

                    <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                            <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                                Startup Summit 2025
                            </h3>

                            <p className="text-gray-600 mb-4">
                                Join innovators from around the world at this vibrant event
                                filled with networking, workshops, and inspiring keynotes.
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                                <span>
                                    <strong className="text-indigo-500">Location:</strong>{" "}
                                    Bangalore
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Date:</strong> July 30,
                                    2025
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Time:</strong> 10:00 AM -
                                    2:00 PM
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Seats:</strong> 200
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Type:</strong> Paid
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2 rounded hover:bg-indigo-700 transition"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default page;
