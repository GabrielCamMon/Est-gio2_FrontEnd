import axios from "axios";

export default axios.create({baseURL: "http://10.54.121.114:8000/api/v1/", responseType: "json"});
