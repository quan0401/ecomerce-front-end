import instance from "../axios/setup";

export const getCategories = async () => await instance.get("/api/categories");
