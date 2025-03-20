export default async function getVenues() {

    await new Promise((resolve) => setTimeout(resolve,300));

    const reponse = await fetch('https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues');
    if (!reponse.ok) {
        throw new Error('An error has occured while trying to fetch venue data');
    }
    const data : VenueJson = await reponse.json();
    return data;

}