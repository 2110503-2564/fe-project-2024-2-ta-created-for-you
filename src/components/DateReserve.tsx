'use client'

import { DateField, DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs";

export default function DateBooking() {

    return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField required name='bookingDate' helperText="Booking Date" className="w-full my-[20px] bg-white"/>
            </LocalizationProvider>
    );
}