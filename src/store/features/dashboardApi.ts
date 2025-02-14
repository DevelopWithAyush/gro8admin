import { server } from '@/constant/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface DashboardStats {
    ongoingDeals: number
    listedStartups: number
    newUserRegistrations: number
}

interface User {
    id: string
    firstName: string
    lastName: string
    accountType: string
    registrationDate: string
    linkedinAccount: string
    country: string
}

interface UserResponse {
    totalPages: number  
    data: User[]
}

const getAuthToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('authToken');
};

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
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
        getDashboardStats: builder.query<DashboardStats, void>({
            query: () => '/dashboard/registrations/stats',
        }),
        getInvestorRegistrations: builder.query<UserResponse, { page: number, pageSize: number }>({
            query: ({ page, pageSize }) => `/dashboard/registrations/investor?page=${page}&pageSize=${pageSize}`,
        }),
        getMentorRegistrations: builder.query<UserResponse, { page: number, pageSize: number }>({
            query: ({ page, pageSize }) => `/dashboard/registrations/mentor?page=${page}&pageSize=${pageSize}`,
        }),
    }),
})

export const { useGetDashboardStatsQuery, useGetInvestorRegistrationsQuery, useGetMentorRegistrationsQuery } = dashboardApi 