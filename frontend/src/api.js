import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // FastAPI backend URL

export const uploadResume = async (file, jobId) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_id", jobId); // Send job ID with resume

    return axios.post(`${API_BASE_URL}/upload-resume/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};
