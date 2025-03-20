import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Venue() {
    const venues = await getVenues();
    return (
        <main>
            <Suspense fallback={<p className="text-center text-4xl my-auto">Loading...<LinearProgress/></p>}>
                <VenueCatalog venueJson={venues}/>
            </Suspense>
        </main>
    );
}