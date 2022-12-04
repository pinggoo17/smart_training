import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpAPI } from "../../apis/auth";

import SignUpPresenter from "./SignUpPresenter";

function SignUpContainer() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("male");

  const onRegisterClick = async () => {
    let res;
    res = await signUpAPI({ username });

    if (res) {
      alert("register success!!");
      navigate("/login");
    }
  };

  return (
    <SignUpPresenter
      setUsername={setUsername}
      onRegisterClick={onRegisterClick}
      gender={gender}
      setGender={setGender}
    />
  );
}

export default SignUpContainer;
