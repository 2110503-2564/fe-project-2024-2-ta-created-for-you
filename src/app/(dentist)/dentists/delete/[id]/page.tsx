import deleteDentist from "@/libs/deleteDentist";

export default function DentistDeletePage({params}:{params:{id:string}}) {
    return (deleteDentist(params.id));
}