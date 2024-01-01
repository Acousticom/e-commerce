import { createContext, useContext, useState } from "react";
import { json, useNavigate, useSearchParams } from "react-router-dom";
import { loginService, signUpService } from "../services/authServices";
import toast from "react-hot-toast";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const navigate=useNavigate()
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(
    localStorageToken?.user || null
  );
  console.log(token,currentUser)

  const loginAsGuestUser =async () => {
    const userData = {
      email: "omkarsrinivasa@gmail.com",
      password: "omkarsrinivasa",
    };
    const response = await loginService(userData);
    const {
      status,
      data: { encodedToken, foundUser },
    } = response;
    if (status === 200 || status === 201) {
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({ token: encodedToken, user: foundUser })
      );
      setToken(encodedToken);
      setCurrentUser(foundUser);
      toast.success(`Welcome back, ${foundUser.firstName}!👋`);
      navigate("/");
    }
  };
  const signupUser=async(formData)=>{
    const {status,data:{encodedToken,createdUser}}=await signUpService(formData)
    if(status===200||status===201){
      localStorage.setItem("loginDetails",JSON.stringify({user:createdUser,token:encodedToken}))
    }
    setToken(encodedToken)
    setCurrentUser(createdUser)
    toast.success(`Hey! ${createdUser.firstName} 👋`);
    navigate("/");
  }

  const logoutUser=()=>{
    localStorage.removeItem("loginDetails");
    setToken(null);
    setCurrentUser(null);
    toast.success("Logged out successfully!");
    navigate("/");
  }
  return <AuthContext.Provider value={{loginAsGuestUser,token,currentUser,logoutUser,signupUser}}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
