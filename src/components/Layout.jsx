import {FaHome, FaUser} from "react-icons/fa";
import {LuMenuSquare} from "react-icons/lu";
import {FaUserDoctor} from "react-icons/fa6";
import {MdOutlineLogout} from "react-icons/md";
import {useLocation, useNavigate} from "react-router-dom";
import {logout} from "../helper/SessionHelper.js";

const Layout = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    const handleNavigate = (to) => {
      navigate(to);
    }

    return (
        <>
            <div className="p-0 h-screen">
                <div className="layout flex gap-6">
                    {/*Side Bar part*/}
                    <div className="sidebar ml-8 bg-[#330101] min-h-screen w-[300px] shadow-lg rounded-md text-white">
                        <div className="logo p-4">
                            <h6 className="text-center text-xl font-bold">DOC APP</h6>
                        </div>

                        <div className="side-menu px-3 flex flex-col gap-8 py-10">
                            <div onClick={()=>handleNavigate('/')} className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName==='/' && "active"}`} >
                                <FaHome size={20} /> <span className="text-lg font-bold">Home</span>
                            </div>
                            <div onClick={()=>handleNavigate('/appointment')} className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName==='/appointment' && "active"}`}>
                                <LuMenuSquare size={20} /> <span className="text-lg font-bold">Appoinments</span>
                            </div>
                            <div onClick={()=>handleNavigate('/apply-doctor')} className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName==='/apply-doctor' && "active"}`}>
                                <FaUserDoctor size={20} /> <span className="text-lg font-bold"> Apply Doctor</span>
                            </div>
                            <div onClick={()=>handleNavigate('/profile')} className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700 ${pathName==='/profile' && "active"}`}>
                                <FaUser size={20} /> <span className="text-lg font-bold">Profile</span>
                            </div>
                            <div onClick={()=>logout()} className={`flex items-center gap-3 cursor-pointer duration-300 hover:pl-2 hover:text-blue-700`}>
                                <MdOutlineLogout size={20} />
                                <span className="text-lg font-bold">Logout</span>
                            </div>
                        </div>
                    </div>

                    {/*Side Bar part*/}

                    {/*Content*/}
                    <div className="content w-full h-full">
                        <div className="p-5 mb-5 bg-green-100 border h-[10vh] content-header">Header</div>

                        {/*Content Body*/}
                        <div className="content-body p-5 bg-yellow-500 border border-gray-700 h-[85vh]">
                            {children}
                        </div>
                        {/*Content Body Ended*/}
                    </div>
                    {/*Content Ended*/}
                </div>
            </div>
        </>
    );
};

export default Layout;