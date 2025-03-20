import { useReducer } from "react";
import Link from "next/link";
import Card from "./Card";
import getVenues from "@/libs/getVenues";

export default async function VenueCatalog({venueJson} : {venueJson: VenueJson}) {
    // test case throws typeError when venueJson is used for some reason 
    // (presumably because of type problems in the test script)
    const venues = await venueJson;

    return (
        <div>
            <div className='text-2xl bg-white border-2 border-gray-500 rounded-lg text-center w-fit mx-auto my-[20px] p-2 shadow-md'>
                <h1>Select Your Venue Here</h1>
                <h1 className="text-sm">Explore {venues.count} fabulous venues in our catalog</h1>
            </div>

            <div className="flex justify-evenly space-evenly flex-row flex-wrap m-[10px]">
            {
                venues.data.map((venue)=>(
                    <Link href={`/venue/${venue.id}`} className='w-1/5'>
                        <Card venueName={venue.name} imgSrc={venue.picture}/>
                    </Link>  
                ))
            }
            </div>                       
        </div>
    );
}