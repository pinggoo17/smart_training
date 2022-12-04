import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInAPI } from "../../apis/auth";
import LoginPresenter from "./LoginPresenter";

function LoginContainer() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      "https://drive.google.com/file/d/19Hh1y0AMUUP9xeN7sNFJC-T3e8cZYBkF/view?usp=share_link"
    );
  }, []);

  const onLoginClick = async () => {
    let res = await signInAPI({ username });

    if (res) {
      alert("login success!!");
      localStorage.setItem("username", username);
      navigate("/home");
    }
  };

  // localStorage.getItem(‘Key’)
  // localStorage.removeItem(‘name’)

  return (
    <LoginPresenter setUsername={setUsername} onLoginClick={onLoginClick} />
  );
}

export default LoginContainer;
