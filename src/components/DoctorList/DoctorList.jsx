import DoctorListItem from "./DoctorListItem.jsx";
import {useGetDoctorsForUserQuery} from "../../redux/features/doctor/doctorApi.js";
import DoctorListLoading from "../Loader/DoctorListLoading.jsx";

const DoctorList = () => {
    const {data, isLoading, isError, error} = useGetDoctorsForUserQuery();
    const doctors = data?.data || [];


    if(isLoading){
        return (
            <>
                <DoctorListLoading/>
            </>
        )
    }
    else{
        return (
            <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 pb-4">
                    {doctors.length > 0 && (
                        doctors.map((item, i) => {
                            return (
                                <>
                                    <DoctorListItem doctor={item} key={i.toString()}/>
                                </>
                            )
                        })
                    )
                    }
                </div>
            </>
        );
    }
};

export default DoctorList;