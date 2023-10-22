import axios from "axios";

axios.defaults.baseURL = "https://drf-api-mcj-6ae0938a9005.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;