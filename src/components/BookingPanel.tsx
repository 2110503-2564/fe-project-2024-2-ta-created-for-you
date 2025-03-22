

import getBookings from "@/libs/getBookings";
import Bookings from "./Bookings";
import { CircularProgress } from "@mui/material";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";


export default async function BookingPanel() {

    const session = await getServerSession(authOptions)
    
    if (!session || !session.user.token) return (
        redirect('/')
    )

    const res = await getBookings(session.user.token);

    if (res.count == 0) return (
        <div className='w-2/5 mx-auto my-10 border-gray-500 border-2 shadow-lg px-10 py-5 grid justify-center'>
            <div className="bg-gray-100 w-fit px-5 py-2 mx-5 my-2 text-center text-xl">
            <div>No bookings found</div>
            <div className="text-[8px] text-gray-500/80 -my-2">Go to the dentists page to create a new one</div>
            </div>
        </div>
    )

    return (
        <div className='w-2/5 mx-auto my-10 border-gray-500 border-2 shadow-lg px-10 py-5'>
            {
            res.data.map((booking)=>(
                <Bookings booking={booking} key={booking._id}/>
            ))    
            }
        </div>   
    )
}