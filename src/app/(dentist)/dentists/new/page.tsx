import { redirect, RedirectType } from "next/navigation";

export default function NewDentist() {
    redirect('/dentists',RedirectType.replace);
}