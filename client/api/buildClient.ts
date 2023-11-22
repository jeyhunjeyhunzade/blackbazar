import axios from "axios";
import { NextPageContext } from "next";

export default ({ req }: NextPageContext) => {
  if (typeof window === "undefined") {
    // on the server
    return axios.create({
      baseURL: process.env.BASE_URL,
      headers: req?.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};
