import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({venueName, imgSrc, onRate}:{venueName:string, imgSrc:string, onRate?:Function}) {
    return (
        <InteractiveCard>
            <div className='w-full h-[60%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Venue picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px]'>{venueName}</div>        
        </InteractiveCard>
    );
}