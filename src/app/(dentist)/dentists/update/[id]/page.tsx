import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import getDentist from "@/libs/getDentist";
import updateBooking from "@/libs/updateBooking";
import updateDentist from "@/libs/updateDentist";
import { Button, Card, CardContent, CircularProgress, TextField, Typography } from "@mui/material";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { Suspense } from "react";
import SubmitButton from "./SubmitButton";

export default function DentistUpdatePage({params} : {params : {id: string}}) {

    return (
        <> 
            <h1 className="dark:bg-gray-900 py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
             text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                Update Dentist
            </h1> 
            <Suspense fallback={<CircularProgress/>}>
            <UpdateDentistForm id={params.id}/>
            </Suspense>      
        </>
    )

}

async function UpdateDentistForm({id}:{id:string}) {

    const [session, res] = await Promise.all([getServerSession(authOptions), getDentist(id)])
    if (!session || !session.user.token) {redirect('/')}

    const dentist = res.data;

    return (
        <div className="w-[40%] bg-white px-5 py-5 m-auto my-[50px] rounded-3xl border-gray-500 border-2 shadow-xl">
            <Card variant="outlined">
                <CardContent>
                    <Typography>Name: {dentist.name}</Typography>
                    <Typography>Experience: {dentist.experience} years</Typography>
                    <Typography>Expertise: {dentist.expertise}</Typography>
                </CardContent>
            </Card>
            
              <form className="m-auto py-8 grid gap-y-3" action={updateDentist}>
                <input hidden readOnly name="id" value={id}></input>
                <TextField name="name" required label="Dentist name" defaultValue={dentist.name}></TextField>
                <TextField name="experience" type="number" required label="Experience" aria-valuemin={0} defaultValue={dentist.experience}></TextField>
                <TextField name="expertise" required label="Expertise" defaultValue={dentist.expertise}></TextField>
                <SubmitButton/>
            </form>
        </div>
    )
}
