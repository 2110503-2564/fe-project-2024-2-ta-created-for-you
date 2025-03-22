

export default async function getDentists(page: string) {

    const response = await fetch(`https://dentist-backend-2.vercel.app/api/v1/dentists?page=${page}`, {
        next: {tags: ['dentists']}
    });
    if (!response.ok) {
        throw new Error('An error has occured while trying to fetch dentist data');
    }
    const data : DentistJson = await response.json();
    return data;

}