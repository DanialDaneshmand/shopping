import http from "./httpservice";

const loginUser = (data) => {
  return http.post("/user/login", data);
};

export default loginUser;
