// 'use server'
import { getNewAccessToken } from "@/services/auth";
import axios from "axios";
import { cookies } from "next/headers";
import { getAccessToken } from ".";

// baseURL: config.base_api,
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});


export default axiosInstance;


