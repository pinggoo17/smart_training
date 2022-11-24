import React from "react";

import * as C from "./LoginComponent";
import * as S from "./LoginStyled";

import cat from "../../assets/img/cat.svg";
import lock from "../../assets/img/lock.svg";
import mail from "../../assets/img/mail.svg";

import { Button } from "@mui/material";

function LoginPresenter({ setUsername, onLoginClick }) {
  return (
    <S.ContainerDiv>
      <img
        src={cat}
        alt="Logo"
        style={{ paddingTop: "10rem", paddingBottom: "1.5rem" }}
      />
      <div style={{ width: "60%" }}>
        <p
          style={{
            fontWeight: "800",
            fontSize: "24pt",
            width: "100%",
            margin: "0",
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          Smart Trainer
        </p>
        <C.InputBoxWithImg
          placeholder="User Account"
          img={mail}
          setString={setUsername}
        />
        {/* <C.InputBoxWithImg
          placeholder="User Password"
          img={lock}
          setString={setPW}
        /> */}

        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={onLoginClick}
        >
          L O G I N
        </Button>

        <p
          style={{
            fontSize: "12pt",
            textAlign: "center",
            color: "#bdbdbd",
            fontFamily: "sans-serif",
            whiteSpace: "pre-line",
          }}
        >
          do you have no account yet? {"\n"} register{" "}
          <a
            href="/signUp"
            style={{
              color: "blue",
              display: "inline",
              opacity: "0.5",
            }}
          >
            here
          </a>
          !
        </p>
      </div>
    </S.ContainerDiv>
  );
}

export default LoginPresenter;
