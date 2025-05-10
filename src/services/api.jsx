import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/blog/v1',
    timeout: 3000,
    httpsAgent: false,
});

export const getPublications = async () => {
    try {
        return await apiClient.get('/publications/list');
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
}    