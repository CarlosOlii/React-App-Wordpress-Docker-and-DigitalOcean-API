const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

export async function getAll() {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/pages/`);
    if (!response.ok) {
        return;
    }

    return await response.json();
}

export async function findBySlug(slug) {
    if (slug === '/') {
        slug = 'homepage';
    }

    const response = await fetch(`${baseUrl}/wp-json/wp/v2/pages?slug=${slug}`);
    if (!response.ok) {
        return;
    }

    const page = await response.json();
    return page[0];
}

