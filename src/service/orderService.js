import instance from "../axios/setup";

export const getOrdersAdmin = async (AbortController) => {
  return instance.get("/api/orders/admin", { signal: AbortController.signal });
};

export const getOrderById = async (id) => {
  return instance.get("/api/orders/user/" + id);
};

export const maskOrderAsDelivered = (id) => {
  return instance.put("/api/orders/delivered/" + id);
};
