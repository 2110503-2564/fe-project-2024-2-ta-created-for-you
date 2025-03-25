

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import NewBookingForm from '@/components/BookingForm';
import DateBooking from '@/components/DateReserve';
import getBookings from '@/libs/getBookings';
import getDentist from '@/libs/getDentist';
import getUserProfile from '@/libs/getUserProfile';
import { CircularProgress } from '@mui/material';
import { getServerSession } from 'next-auth';
import { redirect, RedirectType } from 'next/navigation';

export default async function DentistBooking({params} : {params : {id: string}}) {

    const [dentist, auth] = await Promise.all([getDentist(params.id), getServerSession(authOptions)]);
    if (!auth || !auth.user.token) {redirect('/',RedirectType.replace)}
    const [user, booking] = await Promise.all([getUserProfile(auth.user.token), getBookings(auth.user.token)])
    if (user.data.role !== 'admin' && booking.count >= 1) {return (
        <main> 
                <h1 className="bg-white text-black py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
                text-gray-700 text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                    Book Dentist
                </h1> 
                <p className="bg-white text-black py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
                text-gray-700 text-center text-xl mx-auto my-[20px] shadow-md">
                    User can only have one booking at a time.
                </p> 
            </main>
    )}
        
    try {
        return (
        <main> 
            <h1 className="text-black bg-white py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
             text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                Book Dentist
            </h1> 
            <NewBookingForm data={dentist.data}/>      
        </main>
    );
    } catch (err:any) {
        return (
            <main> 
                <h1 className="bg-white text-black py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
                 text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                    Book Dentist
                </h1> 
                <p className="bg-white text-black py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
                text-gray-700 text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                    An error occured: {err}
                </p> 
            </main>
        );
    }
    
}

