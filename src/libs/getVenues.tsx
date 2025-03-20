'use server'

export default async function getVenues() {

    const reponse = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists`);
    if (!reponse.ok) {
        throw new Error('An error has occured while trying to fetch dentist data');
    }
    const data : DentistJson = await reponse.json();
    return data;

}