import instance from "../axios/setup";

export const getProductsAdmin = async (abortController) => {
  return await instance.get("/api/products/admin", {
    signal: abortController.signal,
  });
};

export const deleteProductAdmin = async (productId) => {
  return await instance.delete("/api/products/admin/" + productId);
};

export const getProductById = async (productId) => {
  return await instance.get("/api/products/get-one/" + productId);
};
