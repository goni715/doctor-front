import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useApplyDoctorMutation} from "../redux/features/doctor/doctorApi.js";

const ApplyDoctor = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("https://osman-goni.netlify.app/");
    const [address, setAddress] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experience, setExperience] = useState("");
    const [feesPerConsultation, setFeesPerConsultation] = useState(0);

    const [applyDoctor, {isLoading, isSuccess}] = useApplyDoctorMutation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isSuccess){
            navigate('/');
        }
    },[navigate,isSuccess]);


    const handleSubmit = (e) => {
        e.preventDefault()
        applyDoctor({
            email,
            firstName,
            lastName,
            phone,
            website,
            address,
            specialization,
            experience,
            feesPerConsultation,
            "timings": {
                "StartTime": "7pm",
                "EndTime": "10pm"
            }
        })
    }



    return (
        <>
            <form onSubmit={handleSubmit} className="pb-6">
                <h1 className="text-center text-3xl font-bold mb-10">Apply Doctor</h1>
                <h3 className="text-2xl my-3">Personal Details:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="first-name">First Name</label>
                        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" id="first-name" placeholder="your first name"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="last-name">Last Name</label>
                        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your last name" id="last-name"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="phone">Phone No</label>
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="tel" placeholder="your contact no" id="phone"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="email">Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your email address" id="email"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="website">Website</label>
                        <input value={website} onChange={(e)=>setWebsite(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your website" id="website"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="address">Address</label>
                        <input value={address} onChange={(e)=>setAddress(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your address" id="address"/>
                    </div>
                </div>

                <h3 className="text-2xl mt-8 mb-3">Professional Details:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="specialization">Specialization</label>
                        <input value={specialization} onChange={(e)=>setSpecialization(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" placeholder="your specialization" id="specialization"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="experience">Experience</label>
                        <input value={experience} onChange={(e)=>setExperience(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your experience" id="experience"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="fees">Fees Per Consultation</label>
                        <input min={1} value={feesPerConsultation} onChange={(e)=>setFeesPerConsultation(e.target.value)} required className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="number" placeholder="your fees per consultation" id="fees"/>
                    </div>
                    <div>
                        <label className="block pb-2 text-md" htmlFor="timings">Timings</label>
                        <input className="w-1/2 px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="Start time" id="fees"/>
                        <input className="w-1/2 px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="End time" id="fees"/>
                    </div>
                </div>

                <div className="flex justify-end mt-3">
                    <button disabled={isLoading} className="ml-3 bg-primary px-3 py-2 text-white font-bold text-md rounded-md">
                        {isLoading ? "Processing..." : "Submit"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ApplyDoctor;