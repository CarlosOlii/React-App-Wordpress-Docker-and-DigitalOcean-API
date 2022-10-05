import axios from 'axios';

class HttpService {
    constructor() {
        const service = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8001' });

        service.interceptors.response.use(this.handleSuccess, this.handleError);

        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        switch (error.response.status) {
            case 404:
                this.redirectTo("/notFound");
                break;
            default:
                this.redirectTo("/");
                break;
        }

        return Promise.reject(error);
    }

    redirectTo(url) {
        window.location.href = url;
    }

    get(...args) {
        return this.service.get(...args);
    }

    post(...args) {
        return this.service.post(...args);
    }

    put(...args) {
        return this.service.put(...args);
    }

    patch(...args) {
        return this.service.patch(...args);
    }

    delete(...args) {
        return this.service.delete(...args);
    }
}

export default new HttpService();