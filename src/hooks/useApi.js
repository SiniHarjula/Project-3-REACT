import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export function useApi(endpoint) {
  //data from the API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //GET: Data from backend
  const refresh = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}${endpoint}`);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err.message || "Loading data failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [endpoint]);

  //POST: Create a new
  const create = async (newItem) => {
    try {
      const res = await axios.post(`${API_URL}${endpoint}`, newItem);

      setData((prev) => [...prev, res.data]);

      return { success: true };
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Failed to create a new snippet";
      setError(msg);
      return { success: false, error: msg };
    }
  };

  //DELETE: Delete a snippet
  const remove = async (id) => {
    try {
      await axios.delete(`${API_URL}${endpoint}/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete");
    }
  };

  return { data, loading, error, create, remove};
}
