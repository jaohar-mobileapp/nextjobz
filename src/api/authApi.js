import api from "./api";

// Register
export const registerApi = (name, email, password) => {
  return api.post("/auth/register", { name, email, password });
};

// Login
export const loginApi = (email, password) => {
  return api.post("/auth/login", { email, password });
};
