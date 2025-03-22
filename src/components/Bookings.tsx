'use client'

import { DeleteButton, UpdateButton } from "./BookingButton";

export default function Bookings({booking}:{booking: Booking}) {

    const bookDate = new Date(booking.bookingDate);

    return (
        <div className="bg-gray-100 w-full px-4 py-2 my-2 grid grid-cols-2 justify-items-start items-center">
            <div>
                <div>Dentist: {booking.dentist.name}</div>
                <div>Date: {bookDate.toDateString()}</div>
            </div>
    
            <div className="h-[50%] w-[80%] justify-self-end grid grid-cols-2 gap-3">
                <UpdateButton booking={booking}/>
                <DeleteButton booking={booking}/>
            </div>
        </div>
    )
}


