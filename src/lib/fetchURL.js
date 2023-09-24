export const fetchURL = async (url, method = "GET", body, token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const res = await fetch(`http://localhost:8000${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error:", e);
    throw e;
  }
};
