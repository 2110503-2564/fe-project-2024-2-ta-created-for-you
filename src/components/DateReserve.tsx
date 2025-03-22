"use client"

import { DateField, DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateBooking() {
    const [date, setDate] = useState<Dayjs|null>(null)

    return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField required name='bookingDate' value={date} className="w-full my-[20px] bg-white" onChange={()=>setDate(date)}/>
            </LocalizationProvider>
    );
}