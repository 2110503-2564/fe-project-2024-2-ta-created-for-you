import DateBooking from '@/components/DateReserve';
import { CircularProgress, MenuItem, Select, Skeleton, TextField } from '@mui/material';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth'; 
import getDentists from '@/libs/getDentists';
import UserInfo from '@/components/UserInfo';
import BookingPanel from '@/components/BookingPanel';
import { Suspense } from 'react';

export default function Booking() {
 
                  
    return (
        <main>
            <Suspense fallback={<div className="bg-white w-[50%] mx-auto my-10 px-10 py-10 text-xl flex justify-center gap-y-4 border-2 border-gray-500 shadow-lg font-bold"><CircularProgress/></div>}>
               <UserInfo/> 
            </Suspense>
            
            <h1 className="bg-white text-black py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
             text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                Booking List
            </h1>

            <Suspense fallback={
                <div className='w-2/5 mx-auto my-10 border-gray-500 border-2 shadow-lg px-10 py-5 grid justify-center'>
                <CircularProgress size="50px"/>
                </div>
            }>
            <BookingPanel/>
            </Suspense>
        </main>
    );
}