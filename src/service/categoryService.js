import instance from "../axios/setup";

export const getCategories = async (abortController) => {
  return await instance.get("/api/categories", {
    signal: abortController.signal,
  });
};
