import { server } from '@/constant/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const fetchInvestorMetadata = createAsyncThunk(
    'investorMetadata/fetch',
    async (id: string) => {
        const token = getAuthToken();
        const response = await axios.get(`${server}/admin/dashboard/investor/metadata/${id}`,
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

const investorMetadataSlice = createSlice({
    name: 'investorMetadata',
    initialState: {
        data: null as InvestorMetadata | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInvestorMetadata.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchInvestorMetadata.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchInvestorMetadata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch investor data';
            });
    },
});

export default investorMetadataSlice.reducer; 