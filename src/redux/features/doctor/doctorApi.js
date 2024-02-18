import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {io} from "socket.io-client";

export const doctorApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        applyDoctor: builder.mutation({
            query: (data) => ({
                url: "/user/apply-doctor",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Apply Success");
                        const socket = io('http://localhost:5000');
                        socket.emit('send-notification', "send-notification")
                        
                    }
                }catch(err) {
                    console.log(err)
                    ErrorToast("Something Went Wrong!")
                }
            }
        }),
        getDoctor: builder.query({
            query: () => `/user/get-doctor-profile`,
            keepUnusedDataFor: 600,
            providesTags: ["User"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
    }),
})


export const {useApplyDoctorMutation, useGetDoctorQuery} = doctorApi;