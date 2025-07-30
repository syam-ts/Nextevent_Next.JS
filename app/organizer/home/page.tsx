import React from "react";
import QuickStats from "../../../components/organizer/QuickStats";
import HomeEventTypes from "./HomeEventTypes";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen pt-28">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Events created to
              <p>
                make <strong className="text-indigo-600"> memories, </strong>
              </p>
              happiness
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              NextEvent helps your bussiness to grow drastly and power up the
              event mangement industry to its maximum height
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <Link
                href="/organizer/home"
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3
                 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              >
                Get Started
              </Link>

              <Link
                href="/organizer/about"
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuickStats /> 

      <HomeEventTypes />
    </div>
  );
};

export default Home;
