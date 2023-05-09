import instance from "../axios/setup";

export const getToken = async () => {
  return await instance.get("/api/get-token");
};
