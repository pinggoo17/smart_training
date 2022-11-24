import React from "react";
import * as S from "./HomeStyled";
import character1 from "../../assets/img/character1.svg";
import medal from "../../assets/img/medal.svg";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { categoryRemoveAPI } from "../../apis/category";
import { useNavigate } from "react-router-dom";

export function Header({ content }) {
  return (
    <S.HeaderBoxDiv
      style={{ position: "fixed", backgroundColor: "white", zIndex: 10 }}
    >
      <p style={{ fontWeight: "500", fontSize: "1.5rem" }}>{content}</p>
    </S.HeaderBoxDiv>
  );
}

export function CharacterBox({ level, str, currExp, maxExp, img }) {
  return (
    <S.HomeCharacterContainer>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src={character1}
          alt="chracter"
          style={{ width: "5.5rem", objectFit: "contain", paddingTop: "2rem" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          paddingLeft: "1rem",
          marginTop: "1rem",
        }}
      >
        <S.NoMarginP>L.V.{level}</S.NoMarginP>
        <S.NoMarginP>STR: {str}</S.NoMarginP>
        <S.NoMarginP>
          EXP: {(currExp / maxExp) * 100}% ({currExp}/{maxExp})
        </S.NoMarginP>
      </div>
    </S.HomeCharacterContainer>
  );
}

export function ImageWithText({ content, img }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      <img src={img} alt="content" />
      <p style={{ fontWeight: "800", fontSize: "14pt", marginLeft: "0.5rem" }}>
        {content}
      </p>
    </div>
  );
}

export function ImageWithText2({ content, img }) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        width: "90%",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        top: "-1.5rem",
        left: "1rem",
      }}
    >
      <img src={img} alt="content" />
      <p
        style={{
          fontWeight: "400",
          fontSize: "12pt",
          marginLeft: "0.5rem",
          marginTop: "0.5rem",
        }}
      >
        {content}
      </p>
    </div>
  );
}
export function HealthManagementItemDiv({
  title,
  recent,
  last,
  unique_id,
  getTarget,
  removeToggle,
}) {
  const navigate = useNavigate();

  return (
    <S.HealthManagementItemDiv
      onClick={() => {
        localStorage.setItem("unique_id", unique_id);
        localStorage.setItem("target_health", title);
        navigate("/detail");
      }}
    >
      <ImageWithText2 content={title} img={medal} />
      <S.NoMarginP2>최근 운동 일자: {recent}</S.NoMarginP2>
      <S.NoMarginP2>지난 운동량: {last}</S.NoMarginP2>
      <p
        style={{
          position: "absolute",
          right: "0.3rem",
          top: "-1.25rem",
          fontSize: "0.75rem",
          color: "#4E4BF6",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          getTarget({ target: title, unique: unique_id });
          removeToggle(true);
        }}
      >
        제거하기
      </p>
    </S.HealthManagementItemDiv>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "8px",
  boxShadow: 24,
  width: "19rem",
  p: 3,
};

export function ModalItem({ open, title, closeAction, children }) {
  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "1.5rem", fontWieght: "600", margin: "0" }}>
              {title}
            </p>
            <CloseIcon onClick={closeAction} />
          </div>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
