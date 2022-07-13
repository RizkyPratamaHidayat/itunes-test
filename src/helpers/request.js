import Wrap from "./axiosWrapper";

export const getSong = (params = {}) => {
  return Wrap({
    url: "/search",
    method: "GET",
    params: { ...params },
  });
};
