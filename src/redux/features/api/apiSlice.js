import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ErrorToast} from "../../../helper/ValidationHelper.js";
import {getToken} from "../../../helper/SessionHelper.js";

const baseQuery = fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "https://doctor-api-goni.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
=======
     baseUrl: "https://doctor-api-goni.vercel.app/api",
   // baseUrl: "http://localhost:5000/api",
>>>>>>> 7c11d499bf5a8303b4859cd4863461a17a72e52d
    prepareHeaders: async (headers, {getState, endpoint}) =>{
        if(getToken()){
            headers.set("token", getToken());
        }
        return headers;
    }
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            localStorage.clear();
            ErrorToast("Token Expired");
            window.location.href="/";
        }
        return result;
    },
    tagTypes: ["Notification","User","Doctor", "Profile","Users", "Doctors", "Requests", "Appointments", "DoctorAppointments"], //TagS WhiteLists
    endpoints: (builder) => ({}),
})



