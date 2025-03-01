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
    profilePicture: string;
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

interface PledgeStatus {
    netAmount: number;
    totalPledges: number;
}

interface PledgeCategories {
    OPPORTUNITY?: PledgeStatus;
    APPROVED?: PledgeStatus;
    WIP?: PledgeStatus;
    DROPPED?: PledgeStatus;
}

interface StartupRound {
    id: string;
    startupId: string;
    name: string;
    startupName: string;
    expiry: string;
    avatar: string;
    pledges: {
        KYC_STATUS?: PledgeCategories;
        CONSENT?: PledgeCategories;
        CA_STATUS?: PledgeCategories;
        DRAWDOWN?: PledgeCategories;
    };
}

interface StartupRoundsResponse {
    totalPages: number;
    data: StartupRound[];
}

export interface Pledge {
    id: string;
    investmentTermId: string;
    amountUsd: number;
    pledgeStage: string;
    stageStatus: string;
    investorId: string;
    updatedAt: string | null;
    createdAt: string;
    firstName: string;
    lastName: string;
}

interface PledgesResponse {
    totalPages: number;
    data: Pledge[];
}

interface TargetAndRaised {
    totalRaised: number;
    percentageAchieved: number;
    fundingGoalUsd: string;
}

interface Deal {
    id: string;
    startupId: string;
    targetAndRaised: TargetAndRaised;
    name: string;
    startupName: string;
    expiry: string;
    avatar: string;
    status: string;
}

interface DealsResponse {
    totalPages: number;
    data: Deal[];
    page: number;
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
        getStartupRounds: builder.query<StartupRoundsResponse, { page: number; pageSize: number }>({
            query: ({ page, pageSize }) =>
                `/dashboard/startups/approved/rounds?page=${page}&pageSize=${pageSize}`,
        }),
        getStartupRoundPledges: builder.query<PledgesResponse, {
            roundId: string;
            page: number;
            pageSize: number;
        }>({
            query: ({ roundId, page, pageSize }) =>
                `/dashboard/startups/approved/rounds/pledges/${roundId}?page=${page}&pageSize=${pageSize}`,
        }),
        getDealsRegistrations: builder.query<DealsResponse, { page: number; pageSize: number }>({
            query: ({ page, pageSize }) => ({
                url: `dashboard/registrations/deals?page=${page}&pageSize=${pageSize}`,
                method: "GET",
            }),
        }),
        updateDealStatus: builder.mutation<ProfileStatusResponse, {
            id: string;
            status: string;
            reason: string;
            description: string;
            documents: [{ keyId: string }];
        }>({
            query: ({ id, status, reason, description, documents }) => ({
                url: 'dashboard/deal/review',
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

export const { useGetDashboardStatsQuery, useGetInvestorRegistrationsQuery, useGetMentorRegistrationsQuery, useGetStartupRegistrationsQuery, useGetStartupMetadataQuery, useGetInvestorMetadataQuery, useUpdateProfileStatusMutation, useGetStartupRoundsQuery, useGetStartupRoundPledgesQuery, useGetDealsRegistrationsQuery, useUpdateDealStatusMutation } = dashboardApi   