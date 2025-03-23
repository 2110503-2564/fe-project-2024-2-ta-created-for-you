'use client'

import deleteBooking from "@/libs/deleteBooking";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function DeleteBookingPage({params}:{params:{id: string}}) {
    
    try {
        return (
        <>
        <Suspense fallback={<LinearProgress/>}>
            <DeleteAction id={params.id}/>
        </Suspense>
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

async function DeleteAction({id}:{id: string}) {
    await deleteBooking(id)
    return (
        <><LinearProgress/></>    
    )
}