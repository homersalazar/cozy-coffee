import { useState, useEffect } from 'react';
import axios from 'axios';

interface Cafe {
  id: number;
  image_path: string;
  name: string;
  description: string;
  ingredients: string[];
}

export const useFetch = ({ url }: { url: string }): { data: Cafe[], loading: boolean, error: string | null } => {
  const [data, setData] = useState<Cafe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const fetchCoffeeData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffeeData();
  }, [url]);

  return { data, loading, error };
};
