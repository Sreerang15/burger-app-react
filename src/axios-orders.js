import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-ca2fb.firebaseio.com/",
});

export default instance;
