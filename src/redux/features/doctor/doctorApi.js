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
        getDoctorByUserId: builder.query({
            query: () => `/doctor/get-doctor-by-user-id`,
            keepUnusedDataFor: 600,
            providesTags: ["Doctor"],
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
        getDoctorById: builder.query({
            query: (id) => `/doctor/get-doctor/${id}`,
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
        getDoctorsForUser: builder.query({
            query: () => `/doctor/get-doctors-for-user`,
            keepUnusedDataFor: 600,
            providesTags: ["Doctors"],
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
        updateDoctor: builder.mutation({
            query: ({id,data}) => ({
                url: `/doctor/update-doctor/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Doctor"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    console.log(err)
                    if(err?.error?.data?.data?.keyPattern){
                        if(err?.error?.data?.data?.keyPattern['slug'] === 1){
                            ErrorToast("Failld! This Category Already Existed")
                        }
                    }
                }
            }
        }),
    }),
})


export const {useApplyDoctorMutation,useUpdateDoctorMutation, useGetDoctorByUserIdQuery,useGetDoctorByIdQuery, useGetDoctorsForUserQuery} = doctorApi;