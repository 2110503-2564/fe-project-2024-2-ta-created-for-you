'use client'

import DentistCard from '@/components/Card';
import Link from 'next/link';
import getDentists from '@/libs/getDentists';
import { CircularProgress } from '@mui/material';
import { Session } from 'next-auth';
import useSWR from 'swr';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';


export default function DentistPanel() {

    const {data:session} = useSession();
    const [pageIndex, setPageIndex] = useState(1);

    const {data:dentists, isValidating, isLoading} = useSWR(`${pageIndex}`, getDentists);
    if (session) {var {data:user} = useSWR(session.user.token, getUserProfile)}

    if (!dentists || !user) return (
        <div className='my-20 mx-auto justify-center grid'>
        <CircularProgress/>    
        </div> 
    )

     return (
        <div>
            <div className="w-[90%] py-5 flex flex-row justify-center grid grid-cols-3 gap-10 mx-auto">
        {
            dentists.data.map((dentist)=>(
                <DentistCard dentist={dentist} user={user}/>
            ))
        }
            </div>                 
        </div>
    );
}