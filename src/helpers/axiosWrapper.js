import axios from "axios";
import { MAIN_URL } from "../shared/constant";
const request = async function (options) {
  const requestHeaders = options.customHeaders || {
    "Content-type": "application/json",
    Accept: "application/json",
  };
  let token = {};
  // if (options.key) {
  //   token = {
  //     key: "c5834d89d4c743a58fefbd5da33d9ab5",
  //   };
  // } else {
  //   token = {
  //     "x-access-token": "Bearer " + localStorage.getItem("token"),
  //   };
  // }

  const client = axios.create({
    baseURL: options.MAIN_URL || MAIN_URL,
    headers: { ...requestHeaders, ...token },
  });
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    console.log("Request Failed:", error.config);
    if (error.response) {
      if (error.response.status === 400) {
        console.log(error);
      }
      if (error.response.status === 500) {
        alert("Server Connection Error");
      }
    } else {
      console.log("Error Message:", error);
    }

    return error.response;
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
