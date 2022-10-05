import httpService from './httpService';

class MenuService {
    async get() {
        const result = await httpService.get('/wp-json/menus/v1/menus/menu/');

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

export default new MenuService();