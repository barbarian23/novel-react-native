import axios from 'axios';
import { BASE_API_URI, defaultHeader } from './api.config';

class axiosService {
    async callService(endpoint, method = 'GET', body = null, respData = true, header = {}) {
        let result = await axios({
            method: method,
            url: `${BASE_API_URI}/${endpoint}`,
            headers: {
                ...defaultHeader,
                ...header,
            },
            data: body
        });

        if (respData) {
            // console.log(endpoint, result);
            return result;
        } else {
            return null;
        }
    }

    get(url, data = null, respData = true) {
        return this.callService(url, 'GET', data, respData);
    }

    post(url, data = null, respData = true) {
        return this.callService(url, 'POST', data, respData, { 'Content-Type': 'application/json' });
    }

    put(url, data = null, respData = true) {
        return this.callService(url, 'PUT', data, respData, { 'Content-Type': 'application/json' });
    }

    push(url, data = null, respData = true) {
        return this.callService(url, 'PUSH', data, respData, { 'Content-Type': 'application/json' });
    }

    delete(url, data = null, respData = true) {
        return this.callService(url, 'DELETE', data, respData, { 'Content-Type': 'application/json' });
    }

}

export default new axiosService();