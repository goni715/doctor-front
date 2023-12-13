import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

const Layout = ({children}) => {


    return (
        <>
            <div className="p-0 h-screen">
                <div className="layout flex gap-6">

                    <Sidebar/>

                    {/*Content*/}
                    <div className="content w-full h-full">
                        <Header/>

                        {/*Content Body*/}
                        <div className="content-body p-5 h-[85vh]">
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