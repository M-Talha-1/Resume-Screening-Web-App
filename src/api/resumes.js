import api from './config';

export const resumesAPI = {
    upload: (jobId, formData) => api.post(`/resumes/upload/${jobId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }),
    getJobResumes: (jobId) => api.get(`/resumes/job/${jobId}`),
    rate: (resumeId, ratingData) => api.post(`/resumes/${resumeId}/rate`, ratingData),
    analyze: (resumeId) => api.get(`/resumes/${resumeId}/analysis`),
}; 