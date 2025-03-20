import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth";

export default async function UserInfo() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token);
    var createdAt = new Date(profile.data.createdAt);
    return (
        <div className="bg-white m-10 px-10 py-5 text-xl flex flex-col gap-y-4 border-2 border-gray-500 shadow-lg font-bold">
                <div>Name <p className="font-normal text-sm">{profile.data.name}</p></div>
                <div>Email <p className="font-normal text-sm">{profile.data.email}</p></div>
                <div>Tel. <p className="font-normal text-sm">{profile.data.tel}</p></div>
                <div>Member Since <p className="font-normal text-sm">{createdAt.toString()}</p></div>
            </div>       
    )
}