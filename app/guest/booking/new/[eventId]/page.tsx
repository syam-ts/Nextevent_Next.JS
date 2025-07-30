import React, { use } from "react";
import NewBookingComponent from "../../../../../components/guest/booking/NewBookingCompnent";

const page = ({ params }: { params: Promise<{ eventId: string }> }) => {
  const { eventId } = use<{ eventId: string }>(params);

  return (
    <div>
      <NewBookingComponent eventId={eventId} />
    </div>
  );
};

export default page;
