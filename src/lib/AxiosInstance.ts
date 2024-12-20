import config from "@/config";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: config.base_api,
});


export default axiosInstance;
