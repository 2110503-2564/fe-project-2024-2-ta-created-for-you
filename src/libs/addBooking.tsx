'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

export default async function addBooking(data: FormData) {
    try {
       const session = await getServerSession(authOptions)
    const dentist = data.get('id')?.toString();
    const date = data.get('bookingDate')?.toString();
    if (!session || !session.user.token) {
        throw new Error('Unauthorized')
    }
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists/${dentist}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${session.user.token}`
        },
        body: JSON.stringify({
            bookingDate: date
        })
    })

    if (!response.ok) {
        throw new Error(`Unable to create booking`)
    }

    redirect('/booking'); 
    }
    

    catch (err:any) {
        console.log(err);
    }
  
}