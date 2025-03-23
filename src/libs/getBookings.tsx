import { revalidateTag } from "next/cache";

export default async function getBookings(token: string) {

    // an error happens while using env. variables with client-side data fetching
    const response = await fetch(`https://dentist-backend-2.vercel.app/api/v1/bookings`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        },
        next: {tags: ['bookings']},
        cache: "no-cache"
    })
    if (!response.ok) {
        console.log(response.json())
        throw new Error("Error while fetching booking data");
    }
    
    const data : {success: boolean, count: number, data: Booking[]} = await response.json();
    return data;

    
}