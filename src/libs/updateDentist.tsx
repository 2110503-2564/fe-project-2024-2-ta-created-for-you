'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect, RedirectType } from "next/navigation";
import { revalidateTag } from "next/cache";
import { experimental_useEffectEvent } from "react";

export default async function updateBooking(data: FormData) {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) {
        throw new Error('Unauthorized')
    }

    const id = data.get('id')?.toString();
    const name = data.get('name')?.toString();
    const experience = data.get('experience');
    const expertise = data.get('expertise')?.toString();
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${session.user.token}`
        },
        body: JSON.stringify({
            name: name,
            experience: experience,
            expertise: expertise
        })
    })

    if (!response.ok) {
        throw new Error(`Unable to update booking`)
    }

    revalidateTag('dentists');
    redirect('/dentists',RedirectType.replace)
  
}