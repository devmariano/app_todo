const API_ENDPOINT = `http://localhost:3033/{resource}`;

const Get = () => {
  return localStorage.getItem("token");
};

const Set = (token) => {
  localStorage.setItem("token", token);
  return Get() === token;
};

const Auth = async (data) => {
  return await fetch(API_ENDPOINT.replace("{resource}", "auth"), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};

const Logout = async () => {};

export const AuthService = {
  Auth,
  Logout,
  Set,
  Get,
};