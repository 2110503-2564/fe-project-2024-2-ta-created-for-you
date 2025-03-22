'use client'

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import createDentist from "@/libs/createDentist";
import getUserProfile from "@/libs/getUserProfile";
import { Accordion, AccordionSummary, Button, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import useSWR from "swr";

export function CreateDentistForm() {
    const {data:session} = useSession();
    if (!session || !session.user.token) return null;

    const {data:res} = useSWR(session.user.token, getUserProfile);
    if (!res || res.data.role !== 'admin') return null;


  return (
    <div className="w-[40%] mx-auto my-5">
    <Accordion>
      <AccordionSummary>Create Dentist</AccordionSummary>
      <form className="w-[90%] m-auto py-10 grid gap-y-3" action={createDentist}>
        <TextField name="name" required label="Dentist name"></TextField>
        <TextField name="experience" type="number" required label="Experience"></TextField>
        <TextField name="expertise" required label="Expertise"></TextField>
        <div className="w-[50%] mx-auto grid justify-center">
          <SubmitButton/>
        </div>
        
      </form>
      </Accordion>
    </div>
  );
}

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>Create Dentist</Button>
  )
  
}