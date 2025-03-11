import { server } from '@/constant/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface User {
    id: string
    name: string
    profilePicture: string
    accountType: string
    registrationDate: string
    linkedinAccount: string
    country: string
}

interface Startup {
    id: string
    name: string
    founder: string
    marketType: string
    website: string
    accountType: string
    registrationDate: string
    country: string
    profilePicture: string
}

interface Syndicate {
    id: string
    profilePicture: string
    name: string
    founder: string
    registrationDate: string
    investmentType: number[]
    website: string
    country: string
}

interface UserResponse {
    totalPages: number
    data: User[]
    page: number
}

interface StartupResponse {
    totalPages: number
    data: Startup[]
    page: number
}

interface SyndicateResponse {
    totalPages: number
    data: Syndicate[]
    page: number
}

const getAuthToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('authToken');
};

export const managementApi = createApi({
    reducerPath: 'managementApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/admin`,
        prepareHeaders: (headers) => {
            const token = getAuthToken();

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getInvestorManagement: builder.query<UserResponse, { page: number, pageSize: number }>({
            query: ({ page, pageSize }) => `/dashboard/management/investor?page=${page}&pageSize=${pageSize}`,
        }),
        getMentorManagement: builder.query<UserResponse, { page: number, pageSize: number }>({
            query: ({ page, pageSize }) => `/dashboard/management/mentor?page=${page}&pageSize=${pageSize}`,
        }),
        getStartupManagement: builder.query<StartupResponse, { page: number, pageSize: number }>({
            query: ({ page, pageSize }) => `/dashboard/management/startup?page=${page}&pageSize=${pageSize}`,
        }),
        getSyndicateManagement: builder.query<SyndicateResponse, { page: number, pageSize: number }>({
            query: ({ page, pageSize }) => `/dashboard/management/syndicate?page=${page}&pageSize=${pageSize}`,
        }),
        // Add more management endpoints as needed
    }),
})

export const {
    useGetInvestorManagementQuery,
    useGetMentorManagementQuery,
    useGetStartupManagementQuery,
    useGetSyndicateManagementQuery,
} = managementApi
