import axios from "axios";

const loginService = async (formData) =>
  await axios.post("/api/auth/login", formData);

const signUpService = async (formData) =>
  await axios.post("/api/auth/signup", formData);

  export {loginService,signUpService}