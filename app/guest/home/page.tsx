import React from "react";
import QuickStats from "../../../components/guest/QuickStats";
import LatestEventsComponent from "../../../components/guest/event/LatestEventsComponent";

const page = () => {
    return (
        <div>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
                <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6 ">
                    <div className="max-w-prose text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Understand user flow and
                            <strong className="text-orange-600"> increase </strong>
                            conversions
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                            nisi. Natus, provident accusamus impedit minima harum corporis
                            iusto.
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded border border-orange-600 bg-orange-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-orange-700"
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
                    <h1 className="font-extrabold text-4xl text-orange-700 py-12">
                        Latest Events
                    </h1>
                </div>

                 <LatestEventsComponent />
            </section>
        </div>
    );
};

export default page;
