'use client'

import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
        Update Dentist
        </Button>
    )
}