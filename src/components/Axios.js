import axios from "axios";

const instance = axios.create({
  baseURL: "https://facial-recog-website.onrender.com",
});

export default instance;
