"use client";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUpload } from "../../../helper/methods/imageUpload"; 
import { useNewEvent } from "../../../hooks/organizer/useNewEvent";
import { Spinner } from "../../../components/lib/organizer/Spinner";
import { useNewEventValidation } from "../../../lib/Formik/organizer/newEventValidation";
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    DollarSign,
    FileText,
    Camera,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { newNotifications } from "../../../redux/slices/organizerNotificationSlice";

const NewEventPage = () => {

    const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
    const [imageloading, setImageloading] = useState<boolean>(false);
    const [isFree, setIsFree] = useState<boolean>(true);
    const { mutate } = useNewEvent();
    const dispatch = useDispatch();
    const router = useRouter(); 

    
    const submitForm = (
        eventName: string,
        eventImage: string,
        location: string,
        date: string,
        startTime: string,
        endTime: string,
        ticketPrice: number,
        totalSeats: number,
        isPaid: boolean,
        isExpired: boolean,
        details: string
    ): void => {
        setLoadingSpinner(true);
        mutate(
            {
                eventName,
                eventImage,
                location,
                date,
                startTime,
                endTime,
                ticketPrice,
                totalSeats,
                isPaid,
                isExpired,
                details,
            },
            {
                onSuccess: (data) => {
                     console.log("success", data);
                    setLoadingSpinner(false);
                    dispatch(newNotifications(data.notification))
                  //  router.push("/organizer/my-events");
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
        useNewEventValidation(submitForm);


    const uploadedImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageloading(true);
       
        const file = e.target.files?.[0];
        if (!file) return;

        try { 
            const url = await ImageUpload(file);
            setImageloading(false);
            setFieldValue("eventImage", url);
        } catch (err) {
            setImageloading(false);
            console.error("Upload failed:", err);
            toast.error(`Upload failed: ${err}`);
        }
    };

    return (
        <div className=" w-full flex items-center justify-center  bg-white">
            {loadingSpinner && <Spinner />}
            <div className="w-full max-w-8xl mx-auto ">
                <div
                    className="bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden"
                  
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex-1 p-8 lg:p-12">
                            <div className="text-center mb-8">
                                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                    <Calendar className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                                    Create New Event
                                </h1>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Fill in the details to create your event
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="eventName"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Event Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Calendar className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="eventName"
                                                name="eventName"
                                                value={values.eventName}
                                                onChange={handleChange}
                                                className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                                placeholder="Enter event name"
                                            />
                                        </div>
                                        {touched.eventName && errors.eventName && (
                                            <div className="text-red-500 text-sm">
                                                {errors.eventName}
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="eventImage"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Event Image
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Camera className="h-5 w-5 text-gray-400" />
                                            </div>

                                            <input
                                                type="file"
                                                id="eventImage"
                                                name="eventImage"
                                                onChange={uploadedImage}
                                                accept="image/*"
                                                className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                            />
                                        </div>
                                        {imageloading && (
                                            <div className="text-blue-500 text-sm">loading...</div>
                                        )}
                                        {touched.eventImage && errors.eventImage && (
                                            <div className="text-red-500 text-sm">
                                                {errors.eventImage}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="location"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Location
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={values.location}
                                                onChange={handleChange}
                                                className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                                placeholder="e.g., Kochi, Kerala"
                                            />
                                        </div>
                                        {touched.location && errors.location && (
                                            <div className="text-red-500 text-sm">
                                                {errors.location}
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="date"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Date
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Calendar className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                value={values.date}
                                                onChange={handleChange}
                                                className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                                            />
                                        </div>
                                        {touched.date && errors.date && (
                                            <div className="text-red-500 text-sm">{errors.date}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="startTime"
                                                className="block text-sm font-semibold text-gray-700"
                                            >
                                                Start Time
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Clock className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <input
                                                    type="time"
                                                    id="startTime"
                                                    name="startTime"
                                                    value={values.startTime}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                                                />
                                            </div>
                                            {touched.startTime && errors.startTime && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.startTime}
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="endTime"
                                                className="block text-sm font-semibold text-gray-700"
                                            >
                                                End Time
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Clock className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <input
                                                    type="time"
                                                    id="endTime"
                                                    name="endTime"
                                                    value={values.endTime}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                                                />
                                            </div>
                                            {touched.endTime && errors.endTime && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.endTime}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="isPaid"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Event Type
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <DollarSign className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <select
                                                id="isPaid"
                                                name="isPaid"
                                                onChange={(e) => {
                                                    handleChange(e.target.value);
                                                    const isPaidValue = e.target.value === "true";
                                                    setIsFree(!isPaidValue);
                                                    setFieldValue("isPaid", e.target.value);
                                                }}
                                                className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                                            >
                                                <option value="false">Free</option>
                                                <option value="true">Paid</option>
                                            </select>
                                        </div>
                                        {touched.isPaid && errors.isPaid && (
                                            <div className="text-red-500 text-sm">
                                                {errors.isPaid}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="totalSeats"
                                                className="block text-sm font-semibold text-gray-700"
                                            >
                                                Total Seats
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Users className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="number"
                                                    id="totalSeats"
                                                    name="totalSeats"
                                                    value={values.totalSeats}
                                                    onChange={handleChange}
                                                    className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                                    placeholder="200"
                                                />
                                            </div>
                                            {touched.totalSeats && errors.totalSeats && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.totalSeats}
                                                </div>
                                            )}
                                        </div>

                                        {!isFree && (
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="totalSeats"
                                                    className="block text-sm font-semibold text-gray-700"
                                                >
                                                    Ticket Price
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Users className="h-5 w-5 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="number"
                                                        id="ticketPrice"
                                                        name="ticketPrice"
                                                        value={values.ticketPrice}
                                                        onChange={handleChange}
                                                        className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                                        placeholder="200"
                                                    />
                                                </div>
                                                {touched.ticketPrice && errors.ticketPrice && (
                                                    <div className="text-red-500 text-sm">
                                                        {errors.ticketPrice}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="details"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Event Details
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <textarea
                                                id="details"
                                                name="details"
                                                value={values.details}
                                                onChange={handleChange}
                                                rows={4}
                                                className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white resize-none"
                                                placeholder="Write a brief about the event..."
                                            />
                                        </div>
                                        {touched.details && errors.details && (
                                            <div className="text-red-500 text-sm">
                                                {errors.details}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center py-3.5 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        Create Event
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="lg:w-2/5 bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center p-8">
                            <div className="text-center text-white">
                                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Calendar className="w-16 h-16 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Create Amazing Events
                                </h3>
                                <p className="text-indigo-100 leading-relaxed">
                                    Bring people together with memorable experiences. Set up your
                                    event details and let the magic happen.
                                </p>
                                <div className="mt-8 flex justify-center space-x-4">
                                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
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

export default NewEventPage;
