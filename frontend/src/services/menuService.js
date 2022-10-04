const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

export async function get() {
    const response = await fetch(`${baseUrl}/wp-json/menus/v1/menus/menu/`);
    if (!response.ok) {
        return;
    }

    const menu = await response.json();
    return menu.items.map(({ID, title, url, slug}) => {
        return {
            id: ID,
            title,
            url,
            slug,
            active: window.location.pathname === `/${slug}/`,
        };
    });
}
