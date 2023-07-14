import http from "./httpservice";

const signupUser = (data) => {
  return http.post("/user/register", data);
};

export default signupUser;
