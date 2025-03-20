'use client';

import { useReducer,useEffect,useRef, useState } from 'react';
import Card from '@/components/Card';
import Link from 'next/link';
import getVenues from '@/libs/getVenues';
import { LinearProgress } from '@mui/material';

export default function CardPanel() {

    const [venueReponse, setVenueReponse] = useState<VenueJson | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const venues = await getVenues();
            setVenueReponse(venues);
        }
        fetchData();
    }, []);


    if (!venueReponse) {
        return (<p>Loading Venue...<LinearProgress/></p>);
    }
    else return (
        <div>
            <div className='text-2xl bg-white border-2 border-gray-500 rounded-lg text-center w-fit mx-auto my-[20px] p-2 shadow-md'>
                <h1>Select Your Venue Here</h1>
            </div>

            <div className="flex justify-evenly space-evenly flex-row flex-wrap m-[10px]">
            {
                venueReponse.data.map((venue)=>(
                    <Link href={`/venue/${venue.id}`} className='w-1/5'>
                        <Card venueName={venue.name} imgSrc={venue.picture}/>
                    </Link>  
                ))
            }
            </div>                 
        </div>
    );
}