import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

export default class MenuService {
    async get() {
        const result = await axios.get(`${baseUrl}/wp-json/menus/v1/menus/menu/`);

        return result.data.items.map(({ID, title, url, slug}) => {
            return {
                id: ID,
                title,
                url,
                slug,
                active: window.location.pathname === `/${slug}/`,
            };
        });
    }
}

