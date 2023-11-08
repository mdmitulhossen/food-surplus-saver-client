import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://food-surplus-saver.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;