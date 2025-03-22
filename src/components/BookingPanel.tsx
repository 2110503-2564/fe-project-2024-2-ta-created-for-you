'use client'

import getBookings from "@/libs/getBookings";
import { useSession } from "next-auth/react";
import Bookings from "./Bookings";
import useSWR from "swr";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function BookingPanel() {

    const {data:session} = useSession();
    const [res, setResponse] = useState<{success: boolean, count: number, data: Booking[]}|null>();
    
    if (!session || !session.user.token) return (
        <div className='w-4/5 mx-auto my-10 border-gray-500 border-2 shadow-lg px-10 py-5 grid'>
            <div className="bg-gray-100 w-fit px-5 py-2 mx-5 my-2">
            <div>Unauthorized</div>
            </div>
        </div>
    )

    // reverted to basic client-sided fetching due to weird error on data mutation
    // const {data: res, isLoading, isValidating} = useSWR(session.user.token, getBookings)

    useEffect(()=>{
        const fetchData = async () => {
            const data = await getBookings(session.user.token);
            setResponse(data);
        }
        fetchData();
    },[])

    if (!res) return (
        <div className='w-2/5 mx-auto my-10 border-gray-500 border-2 shadow-lg px-10 py-5 grid justify-center'>
            <CircularProgress size="50px"/>
        </div>
    )

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