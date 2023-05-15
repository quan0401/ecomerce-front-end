import instance from "../axios/setup";

export const getProductsAdmin = async (abortController) =>
  await instance.get("/api/products/admin", {
    signal: abortController.signal,
  });

export const deleteProductAdmin = async (productId) =>
  await instance.delete("/api/products/admin/" + productId);

export const getProductById = async (productId) =>
  await instance.get("/api/products/get-one/" + productId);

export const getProductsApi = async () => await instance.get("/api/products");

export const updateProductApi = async (productId, productData) =>
  await instance.put("/api/products/admin/" + productId, { ...productData });
