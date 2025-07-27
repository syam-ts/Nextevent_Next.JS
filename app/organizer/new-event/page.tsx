"use client";
import Image from "next/image";
import { newEventValidation } from "../../../lib/Formik/organizer/newEventValidation";
import { useNewEvent } from "../../../api/organizer/hook/useNewEvent";
import { useRouter } from "next/navigation";

const page = () => {
  const { mutate } = useNewEvent();
  const router = useRouter();

  const submitForm = (
    eventName: string,
    eventImage: string,
    location: string,
    date: string,
    startTime: string,
    endTime: string,
    totalSeats: number,
    isPaid: boolean,
    details: string
  ) => {
    mutate(
      {
        eventName,
        eventImage,
        location,
        date,
        startTime,
        endTime,
        totalSeats,
        isPaid,
        details,
      },
      {
        onSuccess: (data) => {
          //  console.log("Success", data);
          router.push("/organizer/home");
        },
        onError(error: any) {
          const err = error as { response: { data: { message: string } } };
          alert(err.response.data.message);
        },
      }
    );
  };

  const { values, touched, errors, handleChange, handleSubmit } =
    newEventValidation(submitForm);

  return (
    <div className="bg-white w-full h-screen overflow-y-hidden">
      <div className="flex justify-between items-start">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl mx-auto bg-white p-10 mt-20 space-y-10"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Create New Event
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Event Name</label>
              <input
                name="eventName"
                value={values.eventName}
                onChange={handleChange}
                className=" border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter event name"
              />
              {touched.eventName && errors.eventName && (
                <div className="text-red-500 text-center">
                  {errors.eventName}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Event Image</label>
              <input
                type="file"
                name="eventImage"
                value={values.eventImage}
                onChange={handleChange}
                className=" border border-gray-300 px-4 py-2 text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file: file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {touched.eventImage && errors.eventImage && (
                <div className="text-red-500 text-center">
                  {errors.eventImage}
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={values.location}
                onChange={handleChange}
                className=" border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="e.g., Kochi, Kerala"
              />
              {touched.location && errors.location && (
                <div className="text-red-500 text-center">
                  {errors.location}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                className=" border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              {touched.date && errors.date && (
                <div className="text-red-500 text-center">{errors.date}</div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Start Time</label>
                <input
                  type="number"
                  name="startTime"
                  value={values.startTime}
                  onChange={handleChange}
                  className=" border border-gray-300 px-1 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  placeholder="10:00 AM - 7:00 PM"
                />
                {touched.startTime && errors.startTime && (
                  <div className="text-red-500 text-center">
                    {errors.startTime}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">End Time</label>
                <input
                  type="number"
                  name="endTime"
                  value={values.endTime}
                  onChange={handleChange}
                  className=" border border-gray-300 px-1 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  placeholder="11:00 AM - 8:00 PM"
                />
                {touched.endTime && errors.endTime && (
                  <div className="text-red-500 text-center">
                    {errors.endTime}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Total Seats</label>
              <input
                type="number"
                name="totalSeats"
                value={values.totalSeats}
                onChange={handleChange} 
                className=" border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="200"
              />
              {touched.totalSeats && errors.totalSeats && (
                <div className="text-red-500 text-center">
                  {errors.totalSeats}
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Paid</label>
              <select
                name="isPaid"
                onChange={handleChange}
                className=" border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              >
                <option value={"false"}>Free</option>
                <option value="true">Paid</option>
              </select>
              {touched.isPaid && errors.isPaid && (
                <div className="text-red-500 text-center">{errors.isPaid}</div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Details</label>
              <textarea
                name="details"
                value={values.details}
                onChange={handleChange}
                rows={4}
                className=" border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Write a brief about the event..."
              />
              {touched.details && errors.details && (
                <div className="text-red-500 text-center">{errors.details}</div>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-16  text-sm shadow-md transition duration-200"
              type="submit"
            >
              Create Event
            </button>
          </div>
        </form>

        <div className="md:col-span-3 overflow-hidden w-2/4">
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
