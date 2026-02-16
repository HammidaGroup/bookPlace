import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    // console.log("TOKEN FROM URL:", token);

    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    }
  }, [params]);

  
};

export default LoginSuccess;
