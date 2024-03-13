import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { GoAlertFill } from "react-icons/go";

export const SidebarAdm = [
    {
        name: "Home", 
        url: '/home',
        icon: <IoHome/>
    }, 

    {
        name: 'Alertas', 
        url: '/alertas',
        icon: <GoAlertFill />
    }, 

    {
        name: 'Usuários', 
        url: '/usuarios',
        icon: <IoPerson />
    }, 

    {
        name: 'Salas', 
        url: '/salas',
        icon: <MdOutlineRoomPreferences />
    }, 

    {
        name: 'Relatórios', 
        url: '/relatorios',
        icon: <IoDocumentTextSharp />
    },    
]
