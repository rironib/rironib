import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
