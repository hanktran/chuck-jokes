import axios from "axios";
import { useState } from "react";

import { Joke } from "../models/Joke";

const useFetch = () => {
  const [data, setData] = useState<Joke[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (search: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${search}`
      );

      setData(res.data?.result || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};

export default useFetch;
