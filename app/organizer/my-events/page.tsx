import React from 'react'
import EventCard from '../../../components/event/EventCard'

const page = () => {
  return (
    <div className='w-screen bg-white justify-center'>
      <div className='justify-center text-center py-10'>
        <h1 className='font-extrabold text-3xl mx-auto text-black'>My Events</h1>
      </div>
      <div className='justify-center mx-auto flex'>
        
    <EventCard />
      </div>
    </div>
  )
}

export default page