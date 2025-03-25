'use client';

import styles from './banner.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const {data:session} = useSession();

    return (
        <>
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Dentist Booking</h1>
                <h3 className='text-'>Fixing your smiles, from anywhere, at any time.</h3>
                <br/>
                <button className='z-30 
            bg-white border border-black rounded-lg m-2 px-2 py-2 text-sm text-black'
            onClick={(e)=>{e.stopPropagation(); router.push('/dentists')}}>
                View Dentists
            </button>
            {session && <button className='z-30 
            bg-white border border-black rounded-lg m-2 px-2 py-2 text-sm text-black'
            onClick={(e)=>{e.stopPropagation(); router.push('/booking')}}>
                View Bookings
            </button>}
            </div>
            
        </div>
        </>
    );
}