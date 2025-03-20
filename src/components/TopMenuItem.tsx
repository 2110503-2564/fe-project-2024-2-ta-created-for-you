import Link from 'next/link';

export default function TopMenuItem({title, pageRef}:{title:string, pageRef:string}) {
    return (
        
            <div className='w-[120px] grid place-content-center text-center text-gray-500 text-[12pt]
            transition duration-300 ease-in-out
            hover:bg-gray-500 hover:text-white'>
            <Link className='hover:underline' 
            href={pageRef}>
                {title}
            </Link>
            </div>
       
        
    );
}