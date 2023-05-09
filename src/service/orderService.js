import instance from "../axios/setup";

export const getOrdersAdmin = async (AbortController) => {
  return await instance.get("/api/orders/admin", {
    signal: AbortController.signal,
  });
};

export const getOrderById = async (id) => {
  return await instance.get("/api/orders/user/" + id);
};

export const maskOrderAsDelivered = async (id) => {
  return await instance.put("/api/orders/delivered/" + id);
};
