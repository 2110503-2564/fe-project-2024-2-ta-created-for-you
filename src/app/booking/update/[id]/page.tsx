import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { UpdateSubmitButton } from "@/components/BookingButton";
import DateBooking from "@/components/DateReserve";
import getBooking from "@/libs/getBooking";
import updateBooking from "@/libs/updateBooking";
import { Button, CircularProgress } from "@mui/material";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function bookingUpdatePage({params} : {params : {id: string}}) {

    return (
        <> 
            <h1 className="text-black bg-white py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
             text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                Update Booking
            </h1> 
            <Suspense fallback={<div className="flex justify-center align-center"><CircularProgress/></div>}>
            <UpdateBookingForm bookId={params.id}/>
            </Suspense>      
        </>
    )

}

async function UpdateBookingForm({bookId}:{bookId:string}) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) {redirect('/')}
    const booking = await getBooking(session.user.token, bookId);

    const date = new Date(booking.data.bookingDate);

    try {
        return (
        <>
        <div className='w-[40%] bg-white m-auto my-[50px] rounded-3xl border-gray-500 border-2 shadow-xl'>
            <form className='w-100vw py-10 grid justify-center mx-auto'
            action={updateBooking}>
                <div> Current booking date: {date.toDateString()} </div>
                <input hidden readOnly name='id' value={bookId}></input>
                <DateBooking/>
                <UpdateSubmitButton/>
                <div className="text-[8px] text-gray-500/75 text-center my-2">
                If you want to change dentist, delete this booking and create a new one.
                </div>
            </form>
        </div> 
        </>
        )
    } catch (err: any) {
        return (
                <>
                <div className="m-auto border border-gray-500 shadow-lg px-4 py-2 text-xl">
                    {err}
                </div>
                </>
            )
        }
    
}