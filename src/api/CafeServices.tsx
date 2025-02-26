import { useState, useEffect } from "react";
import axios from "axios";

export interface Cafe {
  id: number;
  image_url: string;
  name: string;
  // Add any other properties from your API
}

const CafeServices = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://fake-coffee-api.vercel.app/api";

  useEffect(() => {
    const fetchCoffeeData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching coffee data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffeeData();
  }, []);

  return { data, loading };
};

export default CafeServices;
