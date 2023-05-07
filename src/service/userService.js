import instance from "../axios/setup";

export const getUsers = async (abortController) => {
  const result = await instance.get("/api/users", {
    signal: abortController.signal,
  });
  return result;
};

export const deleteUser = async (userId) => {
  const result = instance.delete(`/api/users/` + userId);
  return result;
};
