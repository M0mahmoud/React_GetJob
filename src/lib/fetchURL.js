export const fetchURL = async (url, method, body, token) => {
  try {
    const res = await fetch(`http://localhost:8000${url}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error:", e);
    throw e;
  }
};
