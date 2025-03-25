import DentistPanel from "@/components/DentistPanel";
import getDentists from "@/libs/getDentists";
import { Suspense } from "react";
import { CircularProgress, LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { CreateDentistForm } from "@/components/DentistForm";

export default async function Dentists() {

    return (
        <main>
            <div className='dark:bg-gray-800 text-4xl border-2 border-gray-500 rounded-lg text-center w-fit mx-auto my-[20px] px-5 py-2 shadow-md'>
                <h1>Available Dentists</h1>
                <p className='text-sm'>Select a dentist to create a booking</p>
            </div>
            <Suspense fallback={<div className="w-fit mx-auto my-10"><CircularProgress/></div>}>
                <CreateDentistForm/>
            </Suspense>
            <Suspense fallback={<div className="w-fit mx-auto my-10"><CircularProgress/></div>}>
                <DentistPanel/>
            </Suspense>
        </main>
    );
}