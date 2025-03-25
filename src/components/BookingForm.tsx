

import addBooking from "@/libs/addBooking";
import { CircularProgress } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import DateBooking from "./DateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { CreateSubmitButton } from "./BookingButton";

export default async function NewBookingForm({data}:{data:Dentist|null}) {

    if (data) {
        return (
            <div className='w-[40%] text-black bg-white m-auto my-[50px] rounded-3xl border-gray-500 border-2 shadow-xl'>
                <form className='w-[90%] m-auto py-10 grid'
                action={addBooking}>
                    <div> Dentist: {data.name} </div>
                    <input hidden readOnly name='id' value={data._id}></input>
                    <DateBooking/>
                    <CreateSubmitButton/>
                </form>
            </div> 
        )
    } else return (
        <div className='w-[40%] dark:bg-gray-900 m-auto my-[50px] rounded-3xl border-gray-500 border-2 shadow-xl'>
            <CircularProgress/>
        </div> 
    )
}
