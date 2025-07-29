import React, { useState } from 'react' 
import { MapPin, Calendar, Users, CreditCard, CheckCircle, Clock } from 'lucide-react';

interface BookingCardProps {
  eventDetails: {
    eventName: string;
  };
  isPaid: boolean;
  street: string;
  city: string;
  zipcode: string;
  numberOfSeats: number;
  total: number;
  createdAt: Date;
}

const BookingCard: React.FC = () => { 
  return (
    <div>
        <div className="w-full max-w-sm mx-auto shadow-lg">
       <div 
        className="bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 overflow-hidden"
        style={{
          animation: 'slideUp 0.6s ease-out'
        }}
      >
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="text-white font-semibold text-sm">Booking Confirmed</h3>
              </div>
            </div>
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          
          <h2 className="text-white font-bold text-base mb-1">{eventDetails.eventName}</h2>
          <div className="flex items-center text-orange-200 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            <span>{formatDate(createdAt)}</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-start">
              <MapPin className="w-3 h-3 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-gray-700 text-xs leading-relaxed">
                {street}, {city} {zipcode}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center text-gray-600">
              <Users className="w-3 h-3 mr-1" />
              <span>{numberOfSeats} seat{numberOfSeats > 1 ? 's' : ''}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              isPaid 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {isPaid ? 'Paid' : 'Free'}
            </span>
          </div>

          {isPaid && (
            <div className="bg-orange-50 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-xs font-medium">Total</span>
                <span className="text-lg font-bold text-orange-600">
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          <button className="w-full py-2.5 px-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-semibold rounded-lg hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200">
            View Ticket
          </button>
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
    </div>
  )
}

export default BookingCard