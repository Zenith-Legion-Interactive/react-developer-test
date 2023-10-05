import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: { "app-id": "65080fec01538513690ca63e" },
});

export default axiosInstance;
