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
    console.log(session?.user);

    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
                <h3 className='text-xl font-medium'>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h3>
            </div>
            <button className='z-30 absolute bottom-2 right-3
            bg-white border border-black rounded-lg m-2 px-2 py-2'
            onClick={(e)=>{e.stopPropagation(); router.push('/venue')}}>
                Select Venue
            </button>
        </div>
    );
}