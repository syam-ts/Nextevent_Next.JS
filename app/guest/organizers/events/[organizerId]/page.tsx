"use client"
import React, { use } from "react";
import AllEvents from "./AllEventsByOrganizer";

const page = ({ params }: { params: Promise<{ organizerId: string }> }) => {
  const { organizerId } = use(params);
  return (
    <div>
      <AllEvents organizerId={organizerId} />
    </div>
  );
};

export default page;
