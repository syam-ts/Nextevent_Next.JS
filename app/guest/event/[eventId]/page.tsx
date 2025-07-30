import React, { use } from 'react'
import EventPage from './EventPage'

const page = ({ params }: { params: Promise<{ eventId: string }> }) => {
  const { eventId } = use(params);
  return (
    <div>
      <EventPage eventId={eventId} />
    </div>
  )
}

export default page