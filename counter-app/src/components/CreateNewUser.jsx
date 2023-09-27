// createNewUser.js
import axios from "axios";

const API_BASE_URL = "/data";
const APP_ID = "65080fec01538513690ca63e";

const createNewUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/create`, userData, {
      headers: {"app-id": APP_ID},
    });

    return response.data;
  } catch (error) {
    throw new Error("Error creating user:", error.message);
  }
};

export default createNewUser;
