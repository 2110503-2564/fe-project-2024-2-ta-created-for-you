

import addBooking from "@/libs/addBooking";
import { CircularProgress } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import DateBooking from "./DateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function NewBookingForm({data}:{data:Dentist|null}) {

    
    

    if (data) {
        return (
            <div className='w-[40%] bg-white m-auto my-[50px] rounded-3xl border-gray-500 border-2 shadow-xl'>
                <form className='w-[90%] m-auto py-10 grid'
                action={addBooking}>
                    <div> Dentist: {data.name} </div>
                    <input hidden readOnly name='id' value={data._id}></input>
                    <DateBooking/>
                    <button className='bg-blue-500 text-white rounded-lg w-fit m-auto px-[10px] py-[5px]
                    transition duration-200 ease-in-out
                    hover:bg-blue-700' name='Book'>
                        Create Booking
                    </button>
                </form>
            </div> 
        )
    } else return (
        <div className='w-[40%] bg-white m-auto my-[50px] rounded-3xl border-gray-500 border-2 shadow-xl'>
            <CircularProgress/>
        </div> 
    )
}
