import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';

export default async function TopMenu() {
    const session = await getServerSession(authOptions);
    return (
        <div className='z-30 flex flex-row-reverse h-[50px] border-1 border-gray-700 border-solid fixed top-[0] left-[0] right-[0] bg-white'>
            <Image src={'/img/logo.png'}
            className='h-full w-auto'
            alt='logo'
            width={0}
            height={0}
            sizes='100vh'/>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='Venue' pageRef='/venue'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>

            {
                session? <Link href="/api/auth/signout">
                    <div className='flex items-center absolute left-0 h-full px-5 text-sm'>Sign Out</div>
                </Link> :
                <Link href="/api/auth/signin">
                <div className='flex items-center absolute left-0 h-full px-5 text-sm'>Sign In</div>
            </Link>
            }
        </div>
    );
}