import React, { use } from "react";
import ViewBookingComponent from "../../../../../components/guest/booking/ViewBookingComponent";

const Page = ({ params }: { params: Promise<{ bookingId: string }> }) => {
  const { bookingId } = use(params);
  return <div>
    <ViewBookingComponent bookingId={bookingId} />
  </div>;
};

export default Page;
