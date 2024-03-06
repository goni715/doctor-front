import {useState} from "react";
import {useUpdateDoctorMutation} from "../../redux/features/doctor/doctorApi.js";
import {TimePicker} from "antd";
import moment from 'moment';
import dayjs from "dayjs";
import {ErrorToast} from "../../helper/ValidationHelper.js";


const DocProfileForm = ({data}) => {

    const {
        _id,
        firstName:initialFirstName,
        lastName:initialLastName,
        email:initialEmail,
        phone:initialPhone,
        address:initialAddress,
        specialization:initialSpecialization,
        experience:initialExperience,
        feesPerConsultation:initialFeesPerConsultation,
        website:initialWebsite,
        timings
    } = data || {};

    const {StartTime, EndTime} = timings || {};
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [phone, setPhone] = useState(initialPhone);
    const [email, setEmail] = useState(initialEmail);
    const [website, setWebsite] = useState(initialWebsite);
    const [address, setAddress] = useState(initialAddress);
    const [specialization, setSpecialization] = useState(initialSpecialization);
    const [experience, setExperience] = useState(initialExperience);
    const [feesPerConsultation, setFeesPerConsultation] = useState(initialFeesPerConsultation);
    const [startTime, setStartTime] = useState(StartTime);
    const [endTime, setEndTime] = useState(EndTime);
    const [updateDoctor, {isLoading, isSuccess}] = useUpdateDoctorMutation();


    const handleSubmit = (e) => {
        e.preventDefault()
        if(startTime==="" || endTime===""){
            ErrorToast("Please, set Timings");
        }
        else{
            updateDoctor({
                id:_id,
                data: {
                    email,
                    firstName,
                    lastName,
                    phone,
                    website,
                    address,
                    specialization,
                    experience,
                    feesPerConsultation,
                    timings: {
                        StartTime: startTime,
                        EndTime: endTime
                    }
                }
            })
        }

    }

    const defaultValue = [
        moment(StartTime, 'HH:mm'), // Start time
        moment(EndTime, 'HH:mm')  // End time
    ];



    return (
        <>
            <form onSubmit={handleSubmit} className="px-6 pb-6 shadow">
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
                        <TimePicker.RangePicker
                            key={Date.now()}
                            aria-required={"true"}
                            format="HH:mm"
                            className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                            required
                            defaultValue={defaultValue}
                            // defaultValue={[dayjs(StartTime, 'HH:mm'), dayjs(EndTime, 'HH:mm')]}
                            onChange={(value) => {
                                // console.log(value);
                                setStartTime( moment(value[0]['$d']).format("HH:mm"))
                                setEndTime( moment(value[1]['$d']).format("HH:mm"))
                            }}
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-3">
                    <button disabled={isLoading} className="w-1/2 bg-primary px-3 py-2 text-white font-bold text-md rounded-md">
                        {isLoading ? "Processing..." : "Save Changes"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default DocProfileForm;