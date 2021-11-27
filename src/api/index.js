const baseURL = 'http://localhost:3001';

export const api = {
  get: async (url) => {
    const response = await fetch(baseURL + url);

    if (!response.ok) {
      return response;
    }

    return await response.json();
  }
}
