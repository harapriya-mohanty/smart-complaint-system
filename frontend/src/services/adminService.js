import API from "./api";

export const getAnalytics = async () => {
  return API.get("/admin/analytics");
};

export const getAllWorkers = async () => {
  return API.get("/admin/workers");
};

export const getAllResidents = async () => {
  return API.get("/admin/residents");
};

export const deleteUser = async (id) => {
  return API.delete(`/admin/users/${id}`);
};
