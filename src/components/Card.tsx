'use client'

import { Button, Card, CardActions, CardContent } from "@mui/material";
import { BookButton, DeleteButton, UpdateButton } from "./DentistButton";

export default function DentistCard( {dentist, user} : {dentist:Dentist, user?: UserJson | null} ) {

    return (
        <>  
            <Card>
                <CardContent>
                        <div className='px-5 py-2 text-xl'>{dentist.name}</div>
                            <div className="px-5 py-2">
                            <div>Experience: {dentist.experience} years</div>
                            <div>Expertise: {dentist.expertise}</div>
                        </div>
                </CardContent>
                <CardActions>
                    {user && <BookButton id={dentist._id}/>}
                    {user?.data.role === 'admin' && <><UpdateButton id={dentist._id}/>
                    <DeleteButton id={dentist._id}/></>}
                </CardActions>
            </Card>
        </>
    );
}