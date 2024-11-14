import axios from "axios";

// create baseUrl : eg. www.bpce.com/home in this www.bpce.com is baseurl
const apiInstance = axios.create({
  baseURL: "https://my-post-256e1-default-rtdb.firebaseio.com/",
});

export default apiInstance;
