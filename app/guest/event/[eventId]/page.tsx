"use client";
import { useViewEvent } from "../../../../api/guest/hooks/useViewEvent";

const page = ({ params: { eventId } }: { params: { eventId: string } }) => {
  const { data, isError, isLoading } = useViewEvent(eventId);

  console.log("THE EVENT:", data?.event);

  return (
    <div className="px-7 bg-white  lg:px-10 mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 ">
      <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h1 className="text-4xl text-black md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold ">
          {data?.event.eventName}
        </h1>
        <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-black">
          {data?.event.details}
        </p>
        <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-black">
          {data?.event.date.toString()}
        </p>
        <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-black">
          {data?.event.startTime} : {data?.event.endTime}
        </p>
        <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-black">
          Locaton: {data?.event.location}
        </p>
        <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-black">
          Seats: {data?.event.totalSeats}
        </p>
      </div>
      <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
        <img
          className="rounded-3xl w-full"
          src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
