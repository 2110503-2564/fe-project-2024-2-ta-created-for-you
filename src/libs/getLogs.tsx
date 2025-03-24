export default async function getLogs(token: string) {
    // an error happens while using env. variables with client-side data fetching
    const response = await fetch(`https://dentist-backend-2.vercel.app/api/v1/logs`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        },
        next: {tags: ['logs']},
        cache: "reload"
    })
    if (!response.ok) {
        console.log(response.json())
        throw new Error("Error while fetching logs data");
    }
    
    const data : {success: boolean, count: number, data: Logs[]} = await response.json();
    return data;

    
}
