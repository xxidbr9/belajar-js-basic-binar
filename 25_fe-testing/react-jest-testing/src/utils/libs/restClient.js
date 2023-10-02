import axios from "axios";

const restClient = axios.create({
  baseURL: process.env.BACKEND_URL // ini bisa kalau pakai non vite
  // baseURL: import.meta.env.VITE_BACKEND_URL || ""
});

export default restClient;
