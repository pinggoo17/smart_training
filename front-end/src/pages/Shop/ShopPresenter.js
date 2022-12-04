import React from "react";

import * as C from "./ShopComponent";
import * as S from "./ShopStyled";

import testMonster from "../../assets/img/sword/1.svg";
import testMonster2 from "../../assets/img/sword/2.svg";

import report from "../../assets/img/report.svg";
import { Button } from "@mui/material";

function ShopPresenter({
  targetItem,
  setTargetItem,
  isModalOpen,
  toggleModal,
  isBuy,
  doPurchase,
  weaponList,
  backImgList,
  productList,
}) {
  return (
    <S.ContainerDiv>
      <C.ModalItem
        open={isModalOpen}
        title="구매 확인"
        closeAction={() => toggleModal(false)}
      >
        <p style={{ fontFamily: "sans-serif", color: "#A5A5A5" }}>
          {targetItem.title}
        </p>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={targetItem.img}
            alt="img"
            style={{
              width: "12rem",
              height: "12rem",
              objectFit: "objectFit",
              marginBottom: "2rem",
              borderRadius: "8px",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            disabled={isBuy ? false : true}
            sx={{
              flex: 1,
              height: "2.5rem",
              marginRight: "1rem",
            }}
            onClick={() => {
              // categoryAddAPI({ username: username, title: addTarget });
              doPurchase();
              alert("purchase success!!!");
              toggleModal(false);
            }}
          >
            구매하기
          </Button>
          <Button
            variant="contained"
            sx={{
              flex: 1,
              height: "2.5rem",
              marginLeft: "1rem",
              backgroundColor: "#bdbdbd",
            }}
            onClick={() => {
              // categoryAddAPI({ username: username, title: addTarget });
              toggleModal(false);
              // setActionDetector(actionDectector + 1);
            }}
          >
            취소하기
          </Button>
        </div>
      </C.ModalItem>
      <C.Header content={"상점"} />
      <div style={{ height: "3rem" }} />

      <C.ImageWithText img={report} content="무기" />
      <S.ShopManagementContainer>
        {weaponList.map((item) => (
          <C.ShopItemDiv
            key={item.title}
            title={item.title}
            setTargetItem={setTargetItem}
            img={item.img}
            price={item.price}
            type={item.type}
            expl={item.expl}
            toggleModal={toggleModal}
            effec={item.effec}
            item={item.item}
          />
        ))}
      </S.ShopManagementContainer>

      <C.ImageWithText img={report} content="배경" />
      <S.ShopManagementContainer>
        {backImgList.map((item) => (
          <C.ShopItemDivNoEffect
            key={item.title}
            title={item.title}
            setTargetItem={setTargetItem}
            img={item.img}
            price={item.price}
            type={item.type}
            expl={item.expl}
            toggleModal={toggleModal}
            item={item.item}
          />
        ))}
      </S.ShopManagementContainer>

      <C.ImageWithText img={report} content="음식" />
      <S.ShopManagementContainer>
        {productList.map((item) => (
          <C.ShopItemDivNoEffect
            key={item.title}
            title={item.title}
            setTargetItem={setTargetItem}
            img={item.img}
            price={item.price}
            type={item.type}
            expl={item.expl}
            toggleModal={toggleModal}
            item={item.item}
          />
        ))}
      </S.ShopManagementContainer>
    </S.ContainerDiv>
  );
}

export default ShopPresenter;
