import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // on the server
    return axios.create({
      baseURL:
        process.env.NODE_ENV !== "production"
          ? "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local"
          : "http://www.blackbazar.pro/",
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};
