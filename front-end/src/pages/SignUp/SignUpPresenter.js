import React from "react";

import * as C from "./SignUpComponent";
import * as S from "./SignUpStyled";

import cat from "../../assets/img/cat.svg";
import calendar from "../../assets/img/calendar.svg";
import mail from "../../assets/img/mail.svg";
import { Button } from "@mui/material";

function SignUpPresenter({ setUsername, onRegisterClick, gender, setGender }) {
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

        <C.InputBoxWithImg
          placeholder="User BirthDate (19980508)"
          img={calendar}
          setString={() => {}}
        />
        {/* <C.InputBoxWithImg
          placeholder="User Password"
          img={lock}
          setString={setPW}
        />
        <C.InputBoxWithImg
          placeholder="User Password Check"
          img={lock}
          setString={setPWCK}
        /> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "50%",
              backgroundColor: gender === "male" ? "#c4dcf5" : "#A5A5A5",
              marginRight: "0.5rem",
            }}
            onClick={() => {
              setGender("male");
            }}
          >
            남
          </Button>

          <Button
            variant="contained"
            sx={{
              width: "50%",
              backgroundColor: gender === "female" ? "#c4dcf5" : "#A5A5A5",
              marginLeft: "0.5rem",
            }}
            onClick={() => {
              setGender("female");
            }}
          >
            여
          </Button>
        </div>

        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={onRegisterClick}
        >
          R E G I S T E R
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
          do you have account already? &nbsp; {"\n"} login{" "}
          <a
            href="/login"
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

export default SignUpPresenter;
