import React, { use } from "react";
import ViewEventPage from "./ViewEventPage";

const Page = ({ params }: { params: Promise<{ eventId: string }> }) => {
    
    const { eventId } = use<{ eventId: string }>(params);

    return (
        <div>
            <ViewEventPage eventId={eventId} />
        </div>
    );
};

export default Page;
