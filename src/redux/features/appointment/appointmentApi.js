import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";



export const appointmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        bookAppointment: builder.mutation({
            query: (data) => ({
                url: "/appointment/book-appointment",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Appointments"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("AppointmentList Book Successfully");
                }catch(err) {
                    console.log(err)
                }
            }
        }),
        checkBookingAvailability: builder.mutation({
            query: (data) => ({
                url: "/appointment/check-booking-availability",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("Check Availability");
                }catch(err) {
                    console.log(err)
                }
            }
        }),
        getAppointments: builder.query({
            query: () => `/appointment/get-user-appointments`,
            keepUnusedDataFor: 600,
            providesTags: ["Appointments"],
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
        getDoctorAppointments: builder.query({
            query: () => `/appointment/get-doctor-appointments`,
            keepUnusedDataFor: 600,
            providesTags: ["DoctorAppointments"],
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
        updateAppointmentStatus: builder.mutation({
            query: (data) => ({
                url: "/appointment/update-appointment-status",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["DoctorAppointments"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("Status Update Success");
                }catch(err) {
                    console.log(err)
                }
            }
        }),
    }),
})


export const {useBookAppointmentMutation,useUpdateAppointmentStatusMutation, useCheckBookingAvailabilityMutation, useGetAppointmentsQuery, useGetDoctorAppointmentsQuery} = appointmentApi;