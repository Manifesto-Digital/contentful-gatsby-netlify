import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApi = initialData => {
  const [response, setResponse] = useState(initialData);
  const [url, setUrl] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError, setFalse] = useState(false);

  const getResponse = (event, apiUrl) => {
    setUrl(apiUrl);
    event.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      setFalse(false);
      setLoading(true);

      try {
        const result = await axios(url);
        setResponse(result.data);
      } catch (error) {
        setFalse(true);
      }

      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { response, isLoading, isError, getResponse };
};
