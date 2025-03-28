export default async function getUserProfile(token: string) {
    const response = await fetch(`https://dentist-backend-2.vercel.app/api/v1/auth/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }, cache: "no-cache"
    })
    
    if (!response.ok) {
        throw new Error("Failed to fetch user profile");
    }

    const data : UserJson = await response.json();
    return data;

}