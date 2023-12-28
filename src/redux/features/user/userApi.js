import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {setNotification} from "../../../helper/SessionHelper.js";


export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/user/get-all-user`,
            keepUnusedDataFor: 600,
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
        getMyProfile: builder.query({
            query: () => `/user/get-my-profile`,
            keepUnusedDataFor: 180,
            providesTags: ["Profile"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        setNotification(res?.data?.data?.notification.length);
                    }
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        markAllRead: builder.mutation({
            query: () => ({
                url: "/user/get-all-notification",
                method: "PUT",
            }),
            invalidatesTags: ["Profile"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    setNotification(0);
                    if(res?.data?.message==="success"){
                        SuccessToast("Mark all Read Success");
                    }
                }catch(err) {
                    ErrorToast("Something went wrong!")
                }
            }
        }),
        deleteAllRead: builder.mutation({
            query: () => ({
                url: "/user/delete-all-notification",
                method: "PUT",
            }),
            invalidatesTags: ["Profile"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message==="success"){
                        SuccessToast("Mark all Read Success");
                    }
                }catch(err) {
                    ErrorToast("Something went wrong!")
                }
            }
        })
    }),
})


export const {useGetUsersQuery, useGetMyProfileQuery, useMarkAllReadMutation, useDeleteAllReadMutation} = userApi;