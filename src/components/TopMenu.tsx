import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';
import getUserProfile from '@/libs/getUserProfile';
import { userAgent } from 'next/server';

export default async function TopMenu() {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user.token) {return (
        <div className='z-30 flex flex-row-reverse h-[50px] fixed top-[0] left-[0] right-[0] bg-gray-100'>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='Dentist' pageRef='/dentists'/>
            <Link href="/api/auth/signin">
                <div className='flex items-center absolute left-0 h-full px-5 text-sm'>Sign In</div>
            </Link>
        </div>
    )}

    const user = await getUserProfile(session.user.token) 
    return (
        <div className='z-30 flex flex-row-reverse h-[50px] fixed top-[0] left-[0] right-[0] bg-gray-100'>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='Dentist' pageRef='/dentists'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            {user.data.role === 'admin' && <TopMenuItem title='Logs' pageRef='/logs'/>}
            <Link href="/api/auth/signout">
                <div className='flex items-center absolute left-0 h-full px-5 text-sm'>Sign Out</div>
            </Link>
        </div>
    )
}