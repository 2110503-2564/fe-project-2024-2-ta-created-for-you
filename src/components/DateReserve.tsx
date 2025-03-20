"use client"

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material";

export default function DateReserve() {
    return (
        <div className="">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="w-full my-[20px] bg-white"/>
            </LocalizationProvider>
        </div>
    );
}