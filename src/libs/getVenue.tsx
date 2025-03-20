export default async function getVenue(vid:string) {

    const reponse = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists/${vid}`);
    if (!reponse.ok) {
        throw new Error('An error has occured while trying to fetch venue data');
    }
    const data: {success: boolean, data: Dentist} = await reponse.json();
    return data;
    
}