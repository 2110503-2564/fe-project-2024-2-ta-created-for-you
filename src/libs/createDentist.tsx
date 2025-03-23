'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export default async function createDentist(data: FormData) {
    const name = data.get('name');
    const experience = data.get('experience');
    const expertise = data.get('expertise');

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) {
        throw new Error('Unauthorized')
    }
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${session.user.token}`
        },
        body: JSON.stringify({
            name: name,
            experience: experience,
            expertise: expertise
        }), next: {tags: ['dentists']}
    })

    if (response.status !== 201) {
        throw new Error(`Unable to create dentist`)
    }

    revalidateTag('dentists')
    redirect('/dentists/new',RedirectType.replace);

}