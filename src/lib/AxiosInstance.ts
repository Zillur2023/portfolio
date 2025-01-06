// 'use server'
import axios from "axios";
import { cookies } from "next/headers";

// baseURL: config.base_api,
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});


export default axiosInstance;


