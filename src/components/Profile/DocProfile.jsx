import DocProfileForm from "./DocProfileForm.jsx";
import ProfileLoading from "../Loader/ProfileLoading.jsx";
import {useGetDoctorQuery} from "../../redux/features/doctor/doctorApi.js";


const DocProfile = () => {
    const {data, isLoading, isError} = useGetDoctorQuery();
    const profile = data?.data || {};


    if (isLoading) {
        return (
            <>
                <div>
                    <h1 className="text-center text-3xl font-bold mb-10">Manage Profile</h1>
                </div>
                <ProfileLoading/>
            </>
        )
    }


    if (!isLoading && !isError && profile?._id) {
        return (
            <>
                <div>
                <h1 className="text-center text-3xl font-bold mb-10">Manage Profile</h1>
            </div>
            <DocProfileForm data={profile}/>
           </>
        )
    }
};

export default DocProfile;