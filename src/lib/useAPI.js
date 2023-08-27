import { useEffect, useState } from "react";

const useAPI = (initialUrl, initialOptions) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, options) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setError(result);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(initialUrl, initialOptions);
  }, [initialUrl, initialOptions]);

  return { data, error, loading, fetchData };
};

export default useAPI;
