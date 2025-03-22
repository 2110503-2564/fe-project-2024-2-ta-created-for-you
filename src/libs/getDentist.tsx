
export default async function getDentist(vid:string) {

    const reponse = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists/${vid}`, {
        next: {tags: ['dentists']}
    });
    if (!reponse.ok) {
        throw new Error('An error has occured while trying to fetch dentist data');
    }
    const data: {success: boolean, data: Dentist} = await reponse.json();
    return data;
    
}