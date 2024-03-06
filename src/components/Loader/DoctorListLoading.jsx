import DoctorListItem from "../DoctorList/DoctorListItem.jsx";


const DoctorListLoading = () => {
    const array = [1,2,3,4,5,6,7,8];
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 pb-6">
                {
                    array.map((item,i)=>{
                        return(
                            <>
                                <div
                                    key={i.toString()}
                                    className="card border shadow-md rounded-md flex flex-col gap-4 p-4 animate-pulse"
                                    style={{cursor: "pointer"}}
                                >
                                    <div className="card-header bg-gray-300 h-[40px] rounded">
                                    </div>
                                    <div className="card-header bg-gray-300 h-[40px] rounded">
                                    </div>
                                    <div className="card-header bg-gray-300 h-[40px] rounded">
                                    </div>
                                    <div className="card-header bg-gray-300 h-[40px] rounded">
                                    </div>
                                    <div className="card-header bg-gray-300 h-[40px] rounded">
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    );
};

export default DoctorListLoading;