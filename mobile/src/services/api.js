import axios from "axios";

// Android Studio: localhost -> http://10.0.2.2:3000
// Genymotion: localhost -> http://10.0.3.2:3000

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;
