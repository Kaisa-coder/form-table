import axios from "axios";
const instance = axios.create({
  timeout: 1000 * 5 * 60,
});

export default instance;
