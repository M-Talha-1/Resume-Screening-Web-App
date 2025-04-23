import api from './config';

export const jobsAPI = {
    getAll: () => api.get('/jobs'),
    getById: (id) => api.get(`/jobs/${id}`),
    create: (jobData) => api.post('/jobs', jobData),
    update: (id, jobData) => api.put(`/jobs/${id}`, jobData),
    delete: (id) => api.delete(`/jobs/${id}`),
}; 