import instance from "../axios/setup";

export const loginUser = async (loginData) => {
  return await instance.post("/api/users/login", { ...loginData });
};

export const registerUser = async (data) => {
  return await instance.post("/api/users/register", { ...data });
};

export const getUsers = async (abortController) => {
  const result = await instance.get("/api/users", {
    signal: abortController.signal,
  });
  return result;
};

export const deleteUser = async (userId) => {
  const result = await instance.delete(`/api/users/` + userId);
  return result;
};

export const getProfileApi = async (userId) => {
  return await instance.get("/api/users/profile/" + userId);
};

export const updateProfileApi = async (updatedInfo) => {
  const result = await instance.put("/api/users/profile", { ...updatedInfo });
  return result;
};
