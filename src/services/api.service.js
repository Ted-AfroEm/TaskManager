import JwtService from "@/common/jwt.service";

const axios = require("axios");

// const axios = axios.create({
//   baseURL: "http://localhost:3000/api/user",
// });

//import { axiosInstance } from "./dataService";

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  setHeader() {
    axios.defaults.headers.common["Authorization"] = JwtService.getToken();
  },
  ///////////////////////////////////////////////
  // async post(url, data) {
  //   return await axios.post(url, data)
  // },
  // async get(url) {
  //   return await axios.get(url)
  // },
  // async request(config) {
  //   return await axios(config)
  // },
  ///////////////////////////////////////////////
  async login(credentials) {
    // console.log(credentials);

    try {
      let res = await axios.post("/login", {
        email: credentials.user.email,
        password: credentials.user.password
      });
      console.log(res);
      return res;
    } catch (err) {
      console.error(err.response);
      throw err;
    }
  },
  async register(credentials) {
    try {
      let res = await axios.post("/signup", {
        firstName: credentials.user.firstName,
        lastName: credentials.user.lastName,
        email: credentials.user.email,
        password: credentials.user.password
      });
      //console.log(res);
      return res;
    } catch (err) {
      console.error(err.response);
      throw err.response;
    }
  },
  async checkAuth(access_token) {
    try {
      let res = await axios.get("/", {
        headers: {
          Authorization: access_token
        }
      });
      console.log(res);
      return res;
    } catch (err) {
      throw err.response;
    }
  }
};

export default ApiService;
