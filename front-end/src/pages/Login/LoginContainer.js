import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInAPI } from "../../apis/auth";
import LoginPresenter from "./LoginPresenter";

function LoginContainer() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

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
