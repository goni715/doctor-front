import {getUserDetails, logout} from "../../helper/SessionHelper.js";
import {MdOutlineLogout} from "react-icons/md";
import {Link, useLocation, useNavigate} from "react-router-dom";

import {IoMdClose} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";
import {Badge} from "antd";
import {FaBell, FaUser} from "react-icons/fa";
import {useGetNotificationQuery, useGetUserQuery} from "../../redux/features/user/userApi.js";
import {LuMenuSquare} from "react-icons/lu";
import {FaUserDoctor} from "react-icons/fa6";

const MobileNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const [open, setOpen] = useState(false);
    const {data } = useGetNotificationQuery();
    const {notification} = data?.data || {};
    const {data:data2, isLoading } = useGetUserQuery();
    const user2 = data2?.data;

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    }


    // const handleMenuClick = () => {
    //     setOpen(false);
    // }

    const handleNavigate = (to) => {
        navigate(to);
    }

    const user = getUserDetails();




    return (
        <>

            <div className="mobile-nav block md:hidden w-full fixed top-0 z-20 overflow-hidden">
                {/*Header Part*/}
                <div className="h-[50px] w-full bg-[#1e1e1e] p-2 flex justify-between items-center">
                    <div className="mobile-nav-header flex items-center ">
                        {open ? (
                            <IoMdClose className="mobile-nav-icon text-white cursor-pointer" size={30} onClick={handleOpen}/>
                        ): (
                            <GiHamburgerMenu className="mobile-nav-icon text-white cursor-pointer" size={30} onClick={handleOpen}/>
                        )
                        }
                        <span className="mobile-nav-title text-[#f29f67] font-bold capitalize text-xl ml-5">DOC APP</span>
                    </div>
                    <div className="content-header flex items-center pr-2 gap-5">
                        <Badge onClick={()=>navigate("/notification")} count={notification?.length || 0}>
                            <FaBell className="cursor-pointer text-white" size={20} />
                        </Badge>
                        <Link to="/profile" className="uppercase text-white">
                            {user?.name}
                        </Link>
                    </div>
                </div>
                {/*Header Part Ended*/}

                {/*mobile menu */}

                {
                    open && (
                        <>
                            <div className="mobile-nav md:hidden bg-[#330101] min-h-screen w-[300px] shadow-lg text-white">

                                <div className="side-menu px-3 flex flex-col gap-8 py-10">
                                    <div onClick={() => handleNavigate('/')}
                                         className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName === '/' && "active"}`}>
                                        <LuMenuSquare size={20}/> <span className="text-lg font-bold">Home</span>
                                    </div>


                                    <div onClick={() => handleNavigate('/appointment')}
                                         className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName === '/appointment' && "active"}`}>
                                        <LuMenuSquare size={20}/> <span className="text-lg font-bold">Appoinments</span>
                                    </div>

                                    {
                                        isLoading === false && (
                                            <>
                                                {
                                                    user2?.isDoctor === true ? (
                                                        <div onClick={() => handleNavigate('/doc-profile')}
                                                             className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName === '/doc-profile' && "active"}`}>
                                                            <FaUser size={20}/> <span className="text-lg font-bold">Doc Profile</span>
                                                        </div>
                                                    ) : (
                                                        <div onClick={() => handleNavigate('/apply-doctor')}
                                                             className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName === '/apply-doctor' && "active"}`}>
                                                            <FaUserDoctor size={20}/> <span className="text-lg font-bold">Apply Doctor</span>
                                                        </div>
                                                    )
                                                }
                                            </>
                                        )
                                    }


                                    <div onClick={() => logout()}
                                             className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700`}>
                                            <MdOutlineLogout size={20}/>
                                            <span className="text-lg font-bold">Logout</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
                            }

                        </div>

                    </>
     )
 }

 export default MobileNav;