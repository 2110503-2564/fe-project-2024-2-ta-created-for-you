'use client'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";


export function DeleteButton({booking}:{booking:Booking}) {
    const [open, toggle] = useState(false);
    const router = useRouter();
    return (
        <>
        <Button variant='outlined' sx={{backgroundColor: "white"}} color="error" suppressHydrationWarning
                onClick={()=>{toggle(true)}}>Delete
        </Button>
        <Dialog
        open={open}
        onClose={()=>toggle(false)}>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this booking? This action cannot be reverted.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className="font-bold" suppressHydrationWarning
                onClick={()=>router.replace(`/booking/delete/${booking._id}`)}>Confirm</Button>
            </DialogActions>
        </Dialog>
        
        </>
    )
}

export function UpdateButton({booking}:{booking:Booking}) {

    const router = useRouter();
    
    return (
        <>
            <Button variant='outlined' sx={{backgroundColor: "white"}} suppressHydrationWarning
            onClick={()=>router.push(`/booking/update/${booking._id}`)}>
                Update</Button>
        </>
        
    )
}

export function UpdateSubmitButton() {
    const {pending} = useFormStatus();

    return (
        <Button variant="contained" disabled={pending} type="submit" suppressHydrationWarning>Update Booking</Button>
    )
}

export function CreateSubmitButton() {
    const {pending} = useFormStatus();

    return (
        <Button variant="contained" disabled={pending} type="submit" suppressHydrationWarning>Create Booking</Button>
    )
}