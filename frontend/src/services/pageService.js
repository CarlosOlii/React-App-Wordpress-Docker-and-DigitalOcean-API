import httpService from './httpService';

class PageService {
    async findBySlug(slug) {
        if (slug === '/') {
            slug = 'homepage';
        }

        const result = await httpService.get(`/wp-json/wp/v2/pages?slug=${slug}`);
        const [data] = result.data;

        return data;
    }
}

export default new PageService();