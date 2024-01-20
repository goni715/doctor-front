import {FaHome, FaUser} from "react-icons/fa";
import {LuMenuSquare} from "react-icons/lu";
import {FaUserDoctor} from "react-icons/fa6";

export const SidebarMenu = [
    {
        name: "Home",
        path: "/",
        icon: FaHome,
    },
    {
        name: "Appointments",
        path: "/appointment",
        icon: LuMenuSquare,
    },
    {
        name: "Apply Doctor",
        path: "/apply-doctor",
        icon: FaUserDoctor,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: FaUser,
    },
];

