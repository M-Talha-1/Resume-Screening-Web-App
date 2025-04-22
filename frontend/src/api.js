import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => api.get('/auth/me'),
};

export const jobsAPI = {
  getAll: () => api.get('/jobs'),
  getById: (id) => api.get(`/jobs/${id}`),
  create: (jobData) => api.post('/jobs', jobData),
  update: (id, jobData) => api.put(`/jobs/${id}`, jobData),
  delete: (id) => api.delete(`/jobs/${id}`),
};

export const resumesAPI = {
  upload: (jobId, formData) => api.post(`/resumes/upload/${jobId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  getAll: (jobId) => api.get(`/resumes/job/${jobId}`),
  getById: (id) => api.get(`/resumes/${id}`),
  rate: (resumeId, ratingData) => api.post(`/resumes/${resumeId}/rate`, ratingData),
  getRatings: (resumeId) => api.get(`/resumes/${resumeId}/ratings`),
};

export const analysisAPI = {
  analyzeResume: (resumeId, jobId) => api.post(`/analysis/resume/${resumeId}/job/${jobId}`),
  getAnalysis: (resumeId, jobId) => api.get(`/analysis/resume/${resumeId}/job/${jobId}`),
};

export default api;
