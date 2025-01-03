import axios from "axios";

// baseURL: config.base_api,
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default axiosInstance;
// axiosInstance.interceptors.request.use(
//   function (config) {
//     const cookieStore = cookies();
//     const accessToken = cookieStore.get("accessToken")?.value;

//     if (accessToken) {
//       config.headers.Authorization = accessToken;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error) {
//     const config = error.config;

//     if (error?.response?.status === 401 && !config?.sent) {
//       config.sent = true;
//       const res = await getNewAccessToken();
//       const accessToken = res.data.accessToken;

//       config.headers["Authorization"] = accessToken; 
//       cookies().set("accessToken", accessToken);

//       return axiosInstance(config);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

