import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { resumesAPI, analysisAPI } from '../../api';

// Async thunks
export const uploadResume = createAsyncThunk(
  'resumes/uploadResume',
  async ({ jobId, file }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await resumesAPI.upload(jobId, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchJobResumes = createAsyncThunk(
  'resumes/fetchJobResumes',
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await resumesAPI.getAll(jobId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const rateResume = createAsyncThunk(
  'resumes/rateResume',
  async ({ resumeId, ratingData }, { rejectWithValue }) => {
    try {
      const response = await resumesAPI.rate(resumeId, ratingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const analyzeResume = createAsyncThunk(
  'resumes/analyzeResume',
  async ({ resumeId, jobId }, { rejectWithValue }) => {
    try {
      const response = await analysisAPI.analyzeResume(resumeId, jobId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getResumeAnalysis = createAsyncThunk(
  'resumes/getResumeAnalysis',
  async ({ resumeId, jobId }, { rejectWithValue }) => {
    try {
      const response = await analysisAPI.getAnalysis(resumeId, jobId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  resumes: [],
  currentResume: null,
  analysis: null,
  loading: false,
  error: null,
};

const resumesSlice = createSlice({
  name: 'resumes',
  initialState,
  reducers: {
    clearCurrentResume: (state) => {
      state.currentResume = null;
      state.analysis = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload Resume
      .addCase(uploadResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadResume.fulfilled, (state, action) => {
        state.loading = false;
        state.resumes.push(action.payload);
      })
      .addCase(uploadResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.detail || 'Failed to upload resume';
      })
      // Fetch Job Resumes
      .addCase(fetchJobResumes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobResumes.fulfilled, (state, action) => {
        state.loading = false;
        state.resumes = action.payload;
      })
      .addCase(fetchJobResumes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.detail || 'Failed to fetch resumes';
      })
      // Rate Resume
      .addCase(rateResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rateResume.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentResume) {
          state.currentResume.ratings = state.currentResume.ratings || [];
          state.currentResume.ratings.push(action.payload);
        }
      })
      .addCase(rateResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.detail || 'Failed to rate resume';
      })
      // Analyze Resume
      .addCase(analyzeResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(analyzeResume.fulfilled, (state, action) => {
        state.loading = false;
        state.analysis = action.payload;
      })
      .addCase(analyzeResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.detail || 'Failed to analyze resume';
      })
      // Get Resume Analysis
      .addCase(getResumeAnalysis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getResumeAnalysis.fulfilled, (state, action) => {
        state.loading = false;
        state.analysis = action.payload;
      })
      .addCase(getResumeAnalysis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.detail || 'Failed to get resume analysis';
      });
  },
});

export const { clearCurrentResume, clearError } = resumesSlice.actions;
export default resumesSlice.reducer; 