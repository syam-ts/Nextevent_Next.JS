import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
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

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
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

      <section>
        <div className="bg-white">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
                Quick Stats
              </h2>
              <p className="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
                This package powers many production applications on many
                different hosting platforms.
              </p>
            </div>
          </div>
          <div className="pb-12 mt-10 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-white"></div>
              <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <dl className="bg-white rounded-lg sm:grid sm:grid-cols-4">
                    <div className="flex flex-col p-6 text-center ">
                      <dt
                        className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500"
                        id="item-1"
                      >
                        Total Events Created(count)
                      </dt>
                      <dd
                        className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                        aria-describedby="item-1"
                        id="starsCount"
                      >
                        0
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center ">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        Total Booking (count)
                      </dt>
                      <dd
                        className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                        id="downloadsCount"
                      >
                        0
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center ">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        Total Guest (count)
                      </dt>
                      <dd
                        className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                        id="sponsorsCount"
                      >
                        0
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center ">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        Upcoming Events (count)
                      </dt>
                      <dd
                        className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                        id="sponsorsCount"
                      >
                        0
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/*  Upcoming Events
          A list or table of upcoming events 
          Event name 
          Date & time 
          Total bookings 
          View
           */}
      </section>

      <section>
        <div className="pt-60 bg-white">
          <ul className="flex gap-2 flex-wrap w-2/4 justify-center mx-auto">
            <li>
              <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <h5 className="ml-3 text-slate-800 text-xl font-semibold">
                    Create New Events
                  </h5>
                </div>
                <p className="block text-slate-600 leading-normal font-light mb-4">
                  Because it&apos;s about motivating the doers. Because I&apos;m
                  here to follow my dreams and inspire others.
                </p>
                <button
                  className="rounded-md bg-slate-800 py-2 font-extrabold px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Create
                </button>
              </div>
            </li>
            <li>
              <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <h5 className="ml-3 text-slate-800 text-xl font-semibold">
                    Manage Events
                  </h5>
                </div>
                <p className="block text-slate-600 leading-normal font-light mb-4">
                  Because it&apos;s about motivating the doers. Because I&apos;m
                  here to follow my dreams and inspire others.
                </p>
                <button
                  className="rounded-md bg-slate-800 py-2 font-extrabold px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Manage
                </button>
              </div>
            </li>
            <li>
              <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <h5 className="ml-3 text-slate-800 text-xl font-semibold">
                    Extra 1
                  </h5>
                </div>
                <p className="block text-slate-600 leading-normal font-light mb-4">
                  Because it&apos;s about motivating the doers. Because I&apos;m
                  here to follow my dreams and inspire others.
                </p>
                <button
                  className="rounded-md bg-slate-800 py-2 font-extrabold px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Create
                </button>
              </div>
            </li>
            <li>
              <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <h5 className="ml-3 text-slate-800 text-xl font-semibold">
                    Extra 2
                  </h5>
                </div>
                <p className="block text-slate-600 leading-normal font-light mb-4">
                  Because it&apos;s about motivating the doers. Because I&apos;m
                  here to follow my dreams and inspire others.
                </p>
                <button
                  className="rounded-md bg-slate-800 py-2 font-extrabold px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Create
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;
