export default async function getBooking(token: string, id: string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        },
        next: {tags: ['bookings']},
        cache: "no-store"
    })
    if (!response.ok) {
        console.log(response.json())
        throw new Error("Error while fetching booking data");
    }
    
    const data : {success: boolean, data: Booking} = await response.json();
    return data;

    
}