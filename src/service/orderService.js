import instance from "../axios/setup";

export const getOrdersAdmin = async (AbortController) => {
  return instance.get("/api/orders/admin", { signal: AbortController.signal });
};
