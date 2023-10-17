import axios from 'axios';

// here we are accepting baseURL also because our base url is different in most cases
const createInstance = (baseURL) => {
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const get = async (url, config = {}) => {
    try {
        const response = await createInstance(config.baseURL).get(url, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const post = async (url, data = {}, config = {}) => {
    try {
        const response = await createInstance(config.baseURL).post(url, data, config);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export default {
    get,
    post
};
