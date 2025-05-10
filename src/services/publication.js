import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/blog/v1',
    timeout: 3000,
    httpsAgent: false,
});

export const getPublicationById = async (id) => {
    try {
        return await apiClient.get(`/publications/${id}`);
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};
