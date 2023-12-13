
const ApplyDoctor = () => {
    return (
        <>
            <div className="pb-6">
                <h1 className="text-center text-3xl font-bold mb-10">Apply Doctor</h1>
                <h3 className="text-2xl my-3">Personal Details:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="first-name">First Name</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" id="first-name" placeholder="your first name"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="last-name">Last Name</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your last name" id="last-name"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="phone">Phone No</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your contact no" id="phone"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="email">Email</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your email address" id="email"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="website">Website</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your website" id="website"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="address">Address</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your address" id="address"/>
                    </div>
                </div>

                <h3 className="text-2xl mt-8 mb-3">Professional Details:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="specialization">Specialization</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" placeholder="your specialization" id="specialization"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="experience">Experience</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your experience" id="experience"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="fees">Fees Per Consultation</label>
                        <input className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="your fees per consultation" id="fees"/>
                    </div>
                    <div>
                        <label className="block pb-2 text-md" htmlFor="timings">Timings</label>
                        <input className="w-1/2 px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="Start time" id="fees"/>
                        <input className="w-1/2 px-4 py-2 rounded-md focus:outline-none border border-gray-400" type="text" placeholder="End time" id="fees"/>
                    </div>
                </div>

                <div className="flex justify-end mt-3">
                    <button className="ml-3 bg-primary px-3 py-2 text-white font-bold text-md rounded-md">Submit</button>
                </div>
            </div>
        </>
    );
};

export default ApplyDoctor;