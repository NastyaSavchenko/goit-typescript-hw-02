import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const KEY = import.meta.env.VITE_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    client_id: KEY,
  },
});

export const getImages = async <T>(query: string, page: number): Promise<T> => {
  const res = await api.get<T>(`search/photos?page=${page}&query=${query}`);
  return res.data;
};
