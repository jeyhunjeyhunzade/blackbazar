import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // on the server
    return axios.create({
      baseURL: "http://www.blackbazar.pro/",
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};
