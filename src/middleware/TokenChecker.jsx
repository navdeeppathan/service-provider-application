import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TokenChecker = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // 🚨 No token, force redirect
      navigate("/");
      return;
    }

  
  }, []);

  return null;
};

export default TokenChecker;
