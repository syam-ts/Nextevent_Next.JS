import React from 'react'
import AllOrganizers from '../../../components/guest/organizers/AllOrganizers'

const page = () => {
  return (
    <div>
         <div className="text-center mb-6">
                <h1 className="font-extrabold text-4xl text-orange-700 py-12">
                    Organizers
                </h1>
            </div>
       <AllOrganizers />
    </div>
  )
}

export default page