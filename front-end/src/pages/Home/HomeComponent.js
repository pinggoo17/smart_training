import React from "react";
import * as S from "./HomeStyled";
import character1 from "../../assets/img/character1.svg";
import medal from "../../assets/img/medal.svg";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { categoryRemoveAPI } from "../../apis/category";
import { useNavigate } from "react-router-dom";

function insertCommas(n) {
  // get stuff before the dot
  let s1 = n;
  var d = s1.indexOf(".");
  var s2 = d === -1 ? s1 : s1.slice(0, d);

  // insert commas every 3 digits from the right
  for (var i = s2.length - 3; i > 0; i -= 3)
    s2 = s2.slice(0, i) + "," + s2.slice(i);

  // append fractional part
  if (d !== -1) s2 += s1.slice(d);

  return s2;
}

export function Header({ content }) {
  return (
    <S.HeaderBoxDiv
      style={{ position: "fixed", backgroundColor: "white", zIndex: 10 }}
    >
      <p style={{ fontWeight: "500", fontSize: "1.5rem" }}>{content}</p>
    </S.HeaderBoxDiv>
  );
}

export function CharacterBox({
  level,
  str,
  currExp,
  maxExp,
  img,
  onClickEvent,
  treasure,
  sword,
  backImage,
  monster,
  money,
  weaponPower,
  mobList,
}) {
  const navigate = useNavigate();

  const monsterSelector = (level) => {
    let selectVariable = level % 8;

    if (selectVariable === 0) {
      return mobList["m0"].img;
    } else if (selectVariable === 1) {
      return mobList["m1"].img;
    } else if (selectVariable === 2) {
      return mobList["m2"].img;
    } else if (selectVariable === 3) {
      return mobList["m3"].img;
    } else if (selectVariable === 4) {
      return mobList["m4"].img;
    } else if (selectVariable === 5) {
      return mobList["m5"].img;
    } else if (selectVariable === 6) {
      return mobList["m6"].img;
    } else if (selectVariable === 7) {
      return mobList["m7"].img;
    }
  };
  return (
    <S.HomeCharacterContainer backImage={backImage}>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => onClickEvent()}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1rem",
          }}
        >
          <HPBar percent={(maxExp - currExp) / maxExp} maxHP={maxExp} />
          <img
            src={monsterSelector(level)}
            alt="monster"
            style={{
              width: "20rem",
              height: "10rem",
              objectFit: "objectFit",
              marginTop: "2rem",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "1rem",
            marginTop: "1rem",
            flex: 1.25,
          }}
        >
          <S.NoMarginP>L.V.{level}</S.NoMarginP>
          <S.NoMarginP>
            STR: {str} + {weaponPower}
          </S.NoMarginP>
          <S.NoMarginP>Gold: {money}</S.NoMarginP>
          <S.NoMarginP style={{ fontSize: "8pt" }}>
            HP: {(((maxExp - currExp) / maxExp) * 100).toFixed(2)}% (
            {maxExp - currExp}/{maxExp})
          </S.NoMarginP>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            flex: 1,
            backgroundColor: "rgba(189, 189, 189, 0.25)",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            height: "4rem",
          }}
        >
          <img
            src={sword}
            alt="sword"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "objectFit",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "1rem",
            marginTop: "2rem",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            navigate("/shop");
          }}
        >
          <img
            src={treasure}
            alt="treasure"
            style={{
              width: "4rem",
              objectFit: "contain",
            }}
          />
        </div>
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
      <S.NoMarginP2>
        지난 운동량: {insertCommas(last.toString())}(EMG)
      </S.NoMarginP2>
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

export function HPBar({ percent, maxHP }) {
  percent = Math.round(percent * 100);
  // console.log("maxHP: ", maxHP);
  return (
    <div
      style={{
        width: "90%",
        backgroundColor: "#A5A5A5",
        height: "1.5rem",
        borderRadius: "2px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${maxHP === 0 ? 100 : percent}%`,
          height: "100%",
          backgroundColor: "#f53d71",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <p
          style={{
            color: "white",
            display: "inline",
            margin: 0,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {maxHP === 0 ? 100 : percent}%
        </p>
      </div>
    </div>
  );
}
