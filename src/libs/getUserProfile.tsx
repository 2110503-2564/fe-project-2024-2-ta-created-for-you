export default async function getUserProfile(token: string) {
    const reponse = await fetch("https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/me", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    
    if (!reponse.ok) {
        throw new Error("Failed to fetch user profile");
    }

    const data : UserJson = await reponse.json();
    return data;

}