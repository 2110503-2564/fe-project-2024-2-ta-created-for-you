import deleteBooking from "@/libs/deleteBooking";
import { LinearProgress } from "@mui/material";

export default function DeleteBookingPage({params}:{params:{id: string}}) {
    
    return (
        <>
        <LinearProgress/>{deleteBooking(params.id)}
        </>
    )
}