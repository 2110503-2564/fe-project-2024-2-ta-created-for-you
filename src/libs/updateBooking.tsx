'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect, RedirectType } from "next/navigation";
import { revalidateTag } from "next/cache";

export default async function updateBooking(data: FormData) {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) {
        throw new Error('Unauthorized')
    }

    const booking = data.get('id')?.toString();
    const date = data.get('bookingDate')?.toString();
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${booking}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${session.user.token}`
        },
        body: JSON.stringify({
            bookingDate: date
        })
    })

    if (!response.ok) {
        throw new Error(`Unable to update booking`)
    }

    revalidateTag('bookings');
    redirect('/booking',RedirectType.replace)
  
}