import { server } from '@/constant/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MentorMetadata {
    id: string;
    email: string;
    role: string;
    profile: {
        mentorProfile: {
            country: string;
            state: string;
            city: string;
            gender: string;
            industryPreferences: number[];
            countriesFilingTaxReturnsIn: string;
            expertise: {
                startups: Array<{
                    name: string;
                    url: string;
                    details: string;
                }>;
            };
            preferences: {
                HoursOrMore48: boolean;
                interestedIn888vc: boolean;
            };
        };
    };
    createdAt: string;
}

const getAuthToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('authToken');
};

export const fetchMentorMetadata = createAsyncThunk(
    'mentorMetadata/fetch',
    async (id: string) => {
        const token = getAuthToken();
        const response = await axios.get(
            `${server}/admin/dashboard/mentor/metadata/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        return response.data;
    }
);

const mentorMetadataSlice = createSlice({
    name: 'mentorMetadata',
    initialState: {
        data: null as MentorMetadata | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMentorMetadata.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMentorMetadata.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchMentorMetadata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch mentor data';
            });
    },
});

export default mentorMetadataSlice.reducer; 