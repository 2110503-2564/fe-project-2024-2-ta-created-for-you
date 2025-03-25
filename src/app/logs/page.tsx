import { getServerSession, Session } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import { RedirectType, redirect } from "next/navigation";
import { Suspense } from "react";
import { Accordion, AccordionDetails, AccordionSummary, CircularProgress, Typography } from "@mui/material";
import getLogs from "@/libs/getLogs";

export default async function LogsPage() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) {redirect('/',RedirectType.replace)}
    const user = await getUserProfile(session.user.token)
    if (user.data.role !== 'admin') {redirect('/',RedirectType.replace)}

    return (
        <>
        <h1 className="dark:bg-gray-900 py-[15px] w-fit px-[25px] rounded-2xl border-2 border-gray-500 
             text-center text-4xl font-bold mx-auto my-[20px] shadow-md">
                Audit Logs
        </h1>

        <Suspense fallback={<div className="w-min h-min m-auto"><CircularProgress/></div>}>
            <LogsPanel session={session}/>
        </Suspense>
        </>
    )
}

async function LogsPanel({session}:{session:Session}) {
    const logs = await getLogs(session.user.token)
    if (logs.count === 0) {return (
        <>
        <div className="w-[60%] mx-auto my-5 px-5 py-5 border border-gray-500 shadow-md rounded text-center">
            No logs found
        </div>
        </>
    )}
    return (
        <>
        <div className="w-[60%] mx-auto my-5 px-5 py-5 border border-gray-500 shadow-md rounded">
            {logs.data.map((log)=>(
                <Logs log={log} key={log._id}/>
            ))}
        </div>
        </>
    )
}

function Logs({log}:{log:Logs}) {

    const date = new Date(log.date);

    return (
        <Accordion>
            <AccordionSummary suppressHydrationWarning>{date.toString()}</AccordionSummary>
            <AccordionDetails>
                <Typography>Item Type: {log.type}</Typography>
                <Typography>Item ID: {log.objectId}</Typography>
                <Typography>Action: {log.action}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}