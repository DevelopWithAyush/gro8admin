import { server } from '@/constant/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface DashboardStats {
    ongoingDeals: number
    listedStartups: number
    newUserRegistrations: number
}

interface User {
    id: string
    name: string
    profilePicture: string
    accountType: string
    registrationDate: string
    linkedinAccount: string
    country: string
}

interface UserResponse {
    totalPages: number
    data: User[]
}

interface Startup {
    id: string;
    name: string;
    founder: string;
    marketType: string;
    website: string;
    accountType: string;
    registrationDate: string;
    country: string;
}

interface ProfileStatusResponse {
    success: boolean;
    message: string;
}

interface InvestorMetadata {
    id: string;
    email: string;
    role: string;
    profile: {
        investorProfile: {
            investorType: string;
            country: string;
            city: string;
            state: string;
            industryPreferences: number[];
            countriesFilingTaxReturnsIn: string;
            investorKyc: {
                firstName: string;
                lastName: string;
                occupation: string;
                international: {
                    dob: string;
                    idDocument: {
                        imageUri: string;
                    };
                    typeOfVerification: string;
                    taxFormReview: {
                        occupation: string;
                        totalCommitmentOver5Years: number;
                    };
                    networthExceeds1M: boolean;
                    avgIncomeOf200kFor2Years: boolean;
                };
            };
        };
    };
    createdAt: string;
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
        getStartupRegistrations: builder.query<
            { totalPages: number; data: Startup[] },
            { page: number; pageSize: number }
        >({
            query: ({ page, pageSize }) => ({
                url: `dashboard/registrations/startup?page=${page}&pageSize=${pageSize}`,
                method: "GET",
            }),
        }),
        getStartupMetadata: builder.query({
            query: (id) => `dashboard/startup/metadata/${id}`,
        }),
        getInvestorMetadata: builder.query<InvestorMetadata, string>({
            query: (id) => `dashboard/investor/metadata/${id}`,
        }),
        updateProfileStatus: builder.mutation<ProfileStatusResponse, {
            id: string;
            status: string;
            role: string;
            reason: string;
            description: string;
            documents: [{ keyId: string }]
        }>({
            query: ({ id, status, role, reason, description, documents }) => ({
                url: `dashboard/profile/review/${role}`,
                method: 'POST',
                body: {
                    id,
                    reason,
                    description,
                    documents,
                    status,
                }
            })
        }),
    }),
})

export const { useGetDashboardStatsQuery, useGetInvestorRegistrationsQuery, useGetMentorRegistrationsQuery, useGetStartupRegistrationsQuery, useGetStartupMetadataQuery, useGetInvestorMetadataQuery, useUpdateProfileStatusMutation } = dashboardApi   