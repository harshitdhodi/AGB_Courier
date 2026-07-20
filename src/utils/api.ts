const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:3001';

export async function fetchFromAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    if (!res.ok) {
      console.error(`API Error on ${endpoint}: ${res.statusText}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Fetch error on ${endpoint}:`, error);
    return null;
  }
}

export async function getPageMeta(path: string) {
  try {
    const metas = await fetchFromAPI('/api/settings/meta');
    if (!Array.isArray(metas)) return null;

    const lookupPath = path === '/' ? '/home' : path;
    const meta = metas.find((m: any) => m.pagePath === lookupPath || m.pagePath === path);
    return meta || null;
  } catch (error) {
    console.error(`Error loading meta for ${path}:`, error);
    return null;
  }
}
