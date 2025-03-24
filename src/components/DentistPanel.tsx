'use client'

import DentistCard from '@/components/Card';
import Link from 'next/link';
import getDentists from '@/libs/getDentists';
import { Button, CircularProgress, Divider, Stack, Typography } from '@mui/material';
import { Session } from 'next-auth';
import useSWR from 'swr';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';


export default function DentistPanel() {

    const [pageIndex, setPageIndex] = useState(1);

    const {data:session} = useSession();
    const {data:dentists, isValidating, isLoading} = useSWR(`${pageIndex}`, getDentists);
    if (session) {var {data:user} = useSWR(session.user.token, getUserProfile)}

    if (!dentists || isValidating) return (
        <div className='my-20 mx-auto justify-center grid'>
        <CircularProgress/>    
        </div> 
    )

    if (dentists.count === 0) {
        return (
        <>
        <div className='my-20 mx-auto justify-center grid'>
        <div>No dentist found</div>    
        </div>
        <div className='w-[60%] flex flex-row justify-center align-center mx-auto my-5'>
        <Button hidden={pageIndex <= 1} onClick={()=>{
            setPageIndex(pageIndex - 1)
        }}>Previous</Button>   
        </div>
        <div className='w-[60%] flex flex-row justify-center align-center mx-auto my-5 text-center text-sm'>
          {pageIndex}
        </div> 
        </> 
    )
}

    return (
        <>
        <div className="w-[90%] py-5 justify-center grid grid-cols-3 gap-10 mx-auto">
        {
            dentists.data.map((dentist)=>(
                <DentistCard dentist={dentist} user={user}/>
            ))
        }
        </div>
        <div className='w-[60%] flex flex-row justify-center align-center mx-auto my-5'>
            <Button hidden={pageIndex <= 1} onClick={()=>{
                setPageIndex(pageIndex - 1)
            }}>Previous</Button>
            <Button hidden={dentists.count < 25} onClick={()=>{
                setPageIndex(pageIndex + 1)
            }}>Next</Button>   
        </div>
        <div className='w-[60%] flex flex-row justify-center align-center mx-auto my-5 text-center text-sm'>
              {pageIndex}
        </div>   
        </>               
    );
}
