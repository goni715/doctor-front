import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



const baseQuery = fetchBaseQuery({
    baseUrl: "https://doctor-api-goni.vercel.app/api",
    //baseUrl: "http://localhost:5000/api",
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["Task"], //TagS WhiteLists
    endpoints: (builder) => ({}),
})


