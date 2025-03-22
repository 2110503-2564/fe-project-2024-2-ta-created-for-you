

import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

export function DeleteButton({id}:{id:string}) {
    const [open, toggle] = useState(false);
    const [pending, setPending] = useState(false);
    const router = useRouter();
    return (
        <>
        <Button color="error"
                onClick={()=>{toggle(true)}}>Delete
        </Button>
        <Dialog
        open={open}
        onClose={()=>{
            toggle(false)
            setPending(false)
        }}>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this dentist? This will also delete all bookings with
                    the following dentist.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className="font-bold"
                disabled={pending}
                onClick={()=>{
                    setPending(true);
                    router.replace(`/dentists/delete/${id}`);
                    }}>Confirm</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export function BookButton({id}: {id: string}) {

    const router = useRouter();
    const [pending, setPending] = useState(false);

    return (
        <Button
        disabled={pending}
        onClick={()=>{
            setPending(true);
            router.push(`/booking/${id}`)}}>
            Book
        </Button>
    );
}

export function UpdateButton({id}: {id: string}) {

    const router = useRouter();
    const [pending, setPending] = useState(false);

    return (
        <Button
        disabled={pending}
        onClick={()=>{setPending(true);
        router.push(`/dentists/update/${id}`)}}>
            Update
        </Button>
    );
}