"use client";
import React, { use, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useViewEvent } from "../../../../hooks/event/useViewEvent";
import { useNewBooking } from "../../../../hooks/guest/useNewBooking";
import { MapPin, Home, Navigation, Users, Calendar } from "lucide-react";
import toast from "react-hot-toast";
import { Spinner } from "../../../../components/lib/guest/Spinner";
import { newBookingValidation } from "../../../../lib/Formik/guest/newBookingValidation";
import { loadStripe } from "@stripe/stripe-js";
import { config } from "../../../../utils/config";

const RegisterEventPage = ({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) => {
  const { eventId } = use(params);
  const { mutate } = useNewBooking();
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
  const { data, isLoading } = useViewEvent(eventId);
  const [total, setTotal] = useState<number>(data?.event.ticketPrice as number);
  const searchParams = useSearchParams();
  const isEventFree: any = searchParams.get("isPaid");
  const router = useRouter();

  const submitForm = (
    eventName: string,
    street: string,
    city: string,
    zipcode: number,
    numberOfSeats: number,
    total: number
  ): void => {
    setLoadingSpinner(true);
    mutate(
      {
        eventId,
        eventName,
        isPaid: isEventFree,
        street,
        city,
        zipcode,
        numberOfSeats,
        total,
      },
      {
        onSuccess: async (data) => {
          console.log("Success", data);
          console.log("STRIPE KEY: ", config.strpe_public_key);

          const stripePromise = loadStripe(config.strpe_public_key as string);

          const stripe = await stripePromise;
          if (!stripe) {
            throw new Error("Stripe failed to load.");
          }

          const sessionId = data?.result?.id;
          if (!sessionId) {
            console.error("Session ID not found");
            return;
          }

          const result = await stripe.redirectToCheckout({ sessionId });

          if (result.error) {
            console.error("Stripe Error:", result.error.message);
            alert(result.error.message);
            setLoadingSpinner(false); // only set false if there's an error
          }
        },
        onError(error: unknown) {
          const err = error as { response: { data: { message: string } } };
          setLoadingSpinner(false);
          console.log("ERROR: ", err.response.data.message);
          toast.error(err.response.data.message);
        },
      }
    );
  };

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    newBookingValidation(submitForm, data?.event.eventName as string);

  useEffect(() => {
    if (data?.event.isPaid) {
      const updatedTotal = data?.event.ticketPrice * values.numberOfSeats;
      setTotal(updatedTotal);
      setFieldValue("total", updatedTotal);
    }
  }, [data?.event.isPaid, data?.event.ticketPrice, values.numberOfSeats]);

  return (
    <div className="min-h-screen bg-white w-full flex items-center justify-center p-4 lg:p-8">
      {loadingSpinner && <Spinner />}
      <div className="w-full max-w-6xl mx-auto">
        <div
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          style={{
            animation: "slideUp 0.6s ease-out",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                  Register for Event
                </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                  Complete your registration details
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-orange-600" />
                    Address Information
                  </h3>

                  <div className="space-y-2">
                    <label
                      htmlFor="street"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Street Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="street"
                        name="street"
                        value={values.street}
                        onChange={handleChange}
                        className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                        placeholder="Enter your street address"
                      />
                    </div>
                    {touched.street && errors.street && (
                      <div className="text-red-500 text-center">
                        {errors.street}
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        City
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Navigation className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                          placeholder="Enter your city"
                        />
                      </div>
                      {touched.city && errors.city && (
                        <div className="text-red-500 text-center">
                          {errors.city}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="number"
                        id="zipcode"
                        name="zipcode"
                        value={values.zipcode}
                        onChange={handleChange}
                        className="block w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                        placeholder="Enter ZIP code"
                      />
                      {touched.zipcode && errors.zipcode && (
                        <div className="text-red-500 text-center">
                          {errors.zipcode}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-600" />
                    Seat Selection
                  </h3>

                  <div className="space-y-2">
                    <label
                      htmlFor="numberOfSeats"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Number of Seats
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="numberOfSeats"
                        name="numberOfSeats"
                        value={values.numberOfSeats}
                        onChange={handleChange}
                        className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} Seat{i > 0 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {touched.numberOfSeats && errors.numberOfSeats && (
                    <div className="text-red-500 text-center">
                      {errors.numberOfSeats}
                    </div>
                  )}
                </div>

                {data?.event.isPaid && (
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Price Summary
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-700">
                        <span>Price per seat:</span>
                        <span>₹{data?.event.ticketPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Number of seats:</span>
                      </div>
                      <div className="border-t border-orange-200 pt-2 mt-2">
                        <div className="flex justify-between text-lg font-bold text-gray-900">
                          <span>Total Amount:</span>
                          <span>{total}₹ </span>
                          <input
                            className="hidden"
                            type="number"
                            name="total"
                            value={total}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {touched.total && errors.total && (
                        <div className="text-red-500 text-center">
                          {errors.total}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center py-3.5 px-6 border border-gray-300 rounded-xl shadow-sm text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center py-3.5 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Register Free
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:w-2/5 bg-gradient-to-br from-orange-600 to-orange-800 p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">Event Details</h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {data?.event.eventName}
                    </h4>
                    <input
                      className="hidden"
                      value={data?.event.eventName}
                    // onChange={}
                    />
                    <p className="text-orange-100 text-sm leading-relaxed">
                      {data?.event.details}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-orange-100">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span className="text-sm">{data?.event.location}</span>
                    </div>
                    <div className="flex items-center text-orange-100">
                      <Calendar className="w-4 h-4 mr-3" />
                      <span className="text-sm">
                        {data?.event.date.toString()}
                      </span>
                    </div>
                    <div className="flex items-center text-orange-100">
                      <Users className="w-4 h-4 mr-3" />
                      <span className="text-sm">
                        {data?.event.totalSeats} total seats
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg mb-4">
                    What's Included
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-orange-100">
                      <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                      <span className="text-sm">Welcome refreshments</span>
                    </div>
                    <div className="flex items-center text-orange-100">
                      <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                      <span className="text-sm">Networking opportunities</span>
                    </div>
                    <div className="flex items-center text-orange-100">
                      <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                      <span className="text-sm">Digital resources</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default RegisterEventPage;
