import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

export default class PageService {
    async findBySlug(slug) {
        if (slug === '/') {
            slug = 'homepage';
        }

        const result = await axios.get(`${baseUrl}/wp-json/wp/v2/pages?slug=${slug}`);
        const [data] = result.data;

        return data;
    }
}
