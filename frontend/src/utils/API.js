import axios from "axios";

export const APP_ID = "65080fec01538513690ca63e";

export default axios.create({
  baseURL: `https://dummyapi.io/data/v1/`,
  headers: {
    "app-id": APP_ID,
  },
});
