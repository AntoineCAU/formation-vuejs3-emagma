const baseURL = 'http://localhost:3001';

export const api = {
  get: async (url) => {
    const response = await fetch(baseURL + url);

    if (!response.ok) {
      return response;
    }

    return await response.json();
  },

  post: async (url, body) => {
    const response = await fetch(baseURL + url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "post",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return response;
    }

    return await response.json();
  }
}
