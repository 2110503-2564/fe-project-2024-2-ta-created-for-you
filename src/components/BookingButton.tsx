'use client'

import deleteBooking from "@/libs/deleteBooking";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FormHTMLAttributes, useState } from "react";
import DateBooking from "./DateReserve";
import updateBooking from "@/libs/updateBooking";


export function DeleteButton({booking}:{booking:Booking}) {
    const [open, toggle] = useState(false);
    const router = useRouter();
    return (
        <>
        <Button variant='outlined' sx={{backgroundColor: "white"}} color="error"
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
                <Button className="font-bold"
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
            <Button variant='outlined' sx={{backgroundColor: "white"}}
            onClick={()=>router.push(`/booking/update/${booking._id}`)}>
                Update</Button>
        </>
        
    )
}