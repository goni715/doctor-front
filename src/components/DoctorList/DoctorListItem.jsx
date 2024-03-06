import {useNavigate} from "react-router-dom";

const DoctorListItem = ({doctor}) => {
    const {_id, firstName, lastName, timings, specialization,feesPerConsultation, experience} = doctor || {};
    const {StartTime, EndTime} = timings || {};
    const navigate = useNavigate();

    return (
        <>
            <div
                className="card border shadow-md rounded-md"
            >
                <div className="card-header text-2xl pl-5 py-4 bg-gray-200">
                    Dr. {firstName} {lastName}
                </div>
                <div className="flex flex-col pl-5 pr-3 py-5 gap-5">
                    <p>
                        <b>Specialization:</b> {specialization}
                    </p>
                    <p>
                        <b>Experience:</b> {experience}
                    </p>
                    <p>
                        <b>Fees Per Consultation:</b> {feesPerConsultation} taka
                    </p>
                    <p>
                        <b>Timings:</b> {StartTime} - {EndTime}
                    </p>
                    <button  onClick={() => navigate(`/doc/book-appointment/${_id}`)}  className="bg-gray-800 hover:bg-gray-900 disabled:cursor-not-allowed text-white py-2 px-4 rounded">
                        Book Now
                    </button>
                </div>
            </div>

        </>
    );
};

export default DoctorListItem;