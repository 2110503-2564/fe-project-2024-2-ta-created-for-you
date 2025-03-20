import DateReserve from '@/components/DateReserve';
import { MenuItem, Select, TextField } from '@mui/material';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth'; 
import UserInfo from '@/components/UserInfo';

export default async function Booking() {

    const session = await getServerSession(authOptions);
        if (!session || !session.user.token) return null;
    
        const profile = await getUserProfile(session.user.token);
        var createdAt = new Date(profile.data.createdAt);
                  
  
    return (
        <main>
            <div className="bg-white m-10 px-10 py-5 text-xl flex flex-col gap-y-4 border-2 border-gray-500 shadow-lg font-bold">
                <div>Name <p className="font-normal text-sm">{profile.data.name}</p></div>
                <div>Email <p className="font-normal text-sm">{profile.data.email}</p></div>
                <div>Tel. <p className="font-normal text-sm">{profile.data.tel}</p></div>
                <div>Member Since <p className="font-normal text-sm">{createdAt.toString()}</p></div>
            </div> 
            <h1 className="bg-white py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
            text-gray-700 text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                Venue Booking
            </h1>
            <div className='w-[40%] bg-white m-auto my-[50px] rounded-3xl border-gray-500 border-2 shadow-2xl'>
                <form className='w-[90%] flex flex-col m-auto p-[20px] place-content-evenly'>
                    <TextField className='p-[10px]' variant='standard' name='Name-Lastname' label='Name-Lastname'/>
                    <TextField className='p-[10px]' variant='standard' name='Contact-Number' label='Contact-Number'/>
                    <Select className='p-[10px]' variant='standard' id='venue' name='Venue'>
                        <MenuItem value='Bloom'>The Bloom Pavilion</MenuItem>
                        <MenuItem value='Spark'>Spark Space</MenuItem>
                        <MenuItem value='GrandTable'>The Grand Table</MenuItem>
                    </Select>
                    <DateReserve/>
                    <button className='bg-blue-500 text-white rounded-lg w-fit m-auto my-[30px] px-[10px] py-[5px]
                    transition duration-200 ease-in-out
                    hover:bg-blue-700' name='Book Venue'>
                        Book Venue
                    </button>
                </form>
            </div>        
        </main>
    );
}