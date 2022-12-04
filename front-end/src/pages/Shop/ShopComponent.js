import React from "react";
import * as S from "./ShopStyled";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useNavigate } from "react-router-dom";
import { Box, Modal } from "@mui/material";

export function Header({ content }) {
  const navigate = useNavigate();

  return (
    <S.HeaderBoxDiv
      style={{ position: "fixed", backgroundColor: "white", zIndex: 10 }}
    >
      <ArrowBackIosIcon
        style={{ paddingLeft: "1rem" }}
        onClick={() => {
          navigate("/home");
        }}
      />
      <p style={{ fontWeight: "500", fontSize: "1.5rem" }}>{content}</p>
      <ArrowBackIosIcon style={{ paddingRight: "1rem", color: "white" }} />
    </S.HeaderBoxDiv>
  );
}

export function ShopItemDiv({
  title,
  img,
  price,
  expl,
  setTargetItem,
  type,
  toggleModal,
  effec,
  item,
}) {
  return (
    <S.ShopManagementItemDiv
      onClick={() => {
        // console.log("clicked");
        setTargetItem({
          img: img,
          title: title,
          item: item,
          price: price,
          type: type,
        });
        toggleModal(true);
      }}
    >
      <S.NoMarginP>{title}</S.NoMarginP>
      <img
        src={img}
        alt="img"
        style={{
          width: "12rem",
          height: "12rem",
          objectFit: "objectFit",
        }}
      />
      <S.NoMarginP>가격: {price} G</S.NoMarginP>
      <S.NoMarginP>설명: {expl}</S.NoMarginP>
      <S.NoMarginP>효과: {effec}</S.NoMarginP>
    </S.ShopManagementItemDiv>
  );
}

export function ShopItemDivNoEffect({
  title,
  img,
  price,
  expl,
  setTargetItem,
  type,
  toggleModal,
  item,
}) {
  return (
    <S.ShopManagementItemDiv
      onClick={() => {
        // console.log("clicked");
        setTargetItem({
          img: img,
          title: title,
          item: item,
          price: price,
          type: type,
        });
        toggleModal(true);
      }}
    >
      <S.NoMarginP>{title}</S.NoMarginP>
      <img
        src={img}
        alt="img"
        style={{
          width: "12rem",
          height: "12rem",
          objectFit: "objectFit",
        }}
      />
      <S.NoMarginP>가격: {price} G</S.NoMarginP>
      <S.NoMarginP style={{ whiteSpace: "pre-line" }}>설명: {expl}</S.NoMarginP>
    </S.ShopManagementItemDiv>
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
