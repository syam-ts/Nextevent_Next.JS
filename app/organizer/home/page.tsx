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
        <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] bg-dark">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            
                  <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px] text-indigo-600">
                    Our Pricing Plan
                  </h2>
                  <p className="text-base text-body-color text-black">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap justify-center">
               
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] border-dark-3 bg-dark-2">
                  <span className="mb-3 block text-lg font-semibold text-indigo-600">
                    New Event
                  </span>
                  <h2 className="mb-5 text-[42px] font-bold text-dark text-black">
                    <span>$199</span>
                    <span className="text-base font-medium text-body-color text-black">
                      / year
                    </span>
                  </h2>
                  <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color border-dark-3 text-black">
                    Perfect for using in a Business website or a client project.
                  </p>
                  <div className="mb-9 flex flex-col gap-[14px]">
                    <p className="text-base text-body-color text-black">
                      5 Users
                    </p>
               
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="block w-full bg-indigo-600 text-white rounded-md border border-primary bg-primary p-3 text-center text-base font-medium transition hover:bg-primary/90"
                  >
                    Create New Event 
                  </a>

                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="86"
                          cy="86"
                          r="86"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#3056D3" stop-opacity="0.09" />
                            <stop
                              offset="1"
                              stop-color="#C4C4C4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] border-dark-3 bg-dark-2">
                  <span className="mb-3 block text-lg font-semibold text-indigo-600">
                    Mange Events
                  </span>
                  <h2 className="mb-5 text-[42px] font-bold text-dark text-black">
                    <span>$199</span>
                    <span className="text-base font-medium text-body-color text-black">
                      / year
                    </span>
                  </h2>
                  <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color border-dark-3 text-black">
                    Perfect for using in a Business website or a client project.
                  </p>
                  <div className="mb-9 flex flex-col gap-[14px]">
                    <p className="text-base text-body-color text-black">
                      5 Users
                    </p>
               
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="block w-full bg-indigo-600 text-white rounded-md border border-primary bg-primary p-3 text-center text-base font-medium transition hover:bg-primary/90"
                  >
                    Manage
                  </a>

                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="86"
                          cy="86"
                          r="86"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#3056D3" stop-opacity="0.09" />
                            <stop
                              offset="1"
                              stop-color="#C4C4C4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] border-dark-3 bg-dark-2">
                  <span className="mb-3 block text-lg font-semibold text-indigo-600">
                    View My Events
                  </span>
                  <h2 className="mb-5 text-[42px] font-bold text-dark text-black">
                    <span>$199</span>
                    <span className="text-base font-medium text-body-color text-black">
                      / year
                    </span>
                  </h2>
                  <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color border-dark-3 text-black">
                    Perfect for using in a Business website or a client project.
                  </p>
                  <div className="mb-9 flex flex-col gap-[14px]">
                    <p className="text-base text-body-color text-black">
                      5 Users
                    </p>
               
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="block w-full bg-indigo-600 text-white rounded-md border border-primary bg-primary p-3 text-center text-base font-medium transition hover:bg-primary/90"
                  >
                    View
                  </a>

                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="86"
                          cy="86"
                          r="86"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#3056D3" stop-opacity="0.09" />
                            <stop
                              offset="1"
                              stop-color="#C4C4C4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default page;
