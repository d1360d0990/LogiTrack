import { useEffect, useState } from "react";

const useFetch = (url, getData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const resolve = async () => {
    const response = await getData(url);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    resolve();
  }, [url]);

  return { data, loading };
};

export default useFetch;