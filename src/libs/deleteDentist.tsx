'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect, RedirectType } from "next/navigation";
import { revalidateTag } from "next/cache";

export default async function deleteDentist(id: string) {


    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) {
        throw new Error('Unauthorized')
    }
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${session.user.token}`
        }
    })

    if (!response.ok) {
        throw new Error(`Unable to delete dentist`)
    }

    revalidateTag('dentists')
    redirect('/dentists',RedirectType.replace)
  
}