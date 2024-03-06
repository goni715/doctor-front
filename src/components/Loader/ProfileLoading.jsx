

const ProfileLoading = () => {
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return (
        <>
            <div className="pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 shadow rounded-md p-6 animate-pulse">
                    {
                        array.map((item,i)=>{
                            return(
                                <>
                                    <div key={i.toString()} className="bg-slate-200 h-[50px] rounded-md">
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default ProfileLoading;