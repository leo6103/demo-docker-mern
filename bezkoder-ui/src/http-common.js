import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://103.130.213.117:6868/api',
  headers: {
    "Content-type": "application/json"
  }
});