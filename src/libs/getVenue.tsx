export default async function getVenue(vid:string) {

    const reponse = await fetch(`https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues/${vid}`);
    if (!reponse.ok) {
        throw new Error('An error has occured while trying to fetch venue data');
    }
    const data: {success: boolean, data: VenueItem} = await reponse.json();
    return data;
    
}