import {FaHome, FaUser} from "react-icons/fa";
import {LuMenuSquare} from "react-icons/lu";
import {FaUserDoctor} from "react-icons/fa6";

export const userMenu = [
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

// admin menu
export const adminMenu = [
    {
        name: "Home",
        path: "/",
        icon: FaHome,
    },

    {
        name: "Doctors",
        path: "/admin/doctors",
        icon: FaUserDoctor,
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: FaUser,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: FaUser,
    },
];
