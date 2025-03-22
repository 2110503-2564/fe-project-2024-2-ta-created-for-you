

import NewBookingForm from '@/components/BookingForm';
import DateBooking from '@/components/DateReserve';
import getDentist from '@/libs/getDentist';
import { CircularProgress } from '@mui/material';

export default async function DentistBooking({params} : {params : {id: string}}) {

    const dentist = await getDentist(params.id)
        
  
    return (
        <main> 
            <h1 className="bg-white py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
            text-gray-700 text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                Book Dentist
            </h1> 
            <NewBookingForm data={dentist.data}/>      
        </main>
    );
}

