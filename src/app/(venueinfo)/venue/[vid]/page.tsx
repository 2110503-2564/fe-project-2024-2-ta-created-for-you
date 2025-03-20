import getVenue from "@/libs/getVenue";
import Image from "next/image";

export default async function VenueDetail({params} : {params: {vid: string}}) {

    const venues = await getVenue(params.vid);

    return (
        <main>
            <div className="bg-white mx-10 my-10">
                <div className="flex flex-row gap-5">
                    <Image src={venues.data.picture}
                    alt="Venue Picture"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black m-5"/>
                    <div className="text-4xl my-5 inline-block">
                        <div className="font-bold">{venues.data.name}</div>
                        <div className="text-base my-5">
                            <div>Name: {venues.data.name}</div>
                            <div>Address: {venues.data.address}</div>
                            <div>District: {venues.data.district}</div>
                            <div>Postal code: {venues.data.postalcode}</div>
                            <div>Tel: {venues.data.tel}</div>
                            <div>Daily rate: {venues.data.dailyrate}</div>
                        </div> 
                    </div>
                </div>
            </div>
        </main>
    );
}