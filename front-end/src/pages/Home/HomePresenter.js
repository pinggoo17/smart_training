import React from "react";
import * as C from "./HomeComponent";
import * as S from "./HomeStyled";

import report from "../../assets/img/report.svg";
import { Button } from "@mui/material";
import { categoryAddAPI, categoryRemoveAPI } from "../../apis/category";

function HomePresenter({
  categoryList,
  getTarget,
  target,
  uid,
  removePopUp,
  removeToggle,
  actionDectector,
  setActionDetector,
  addTarget,
  addPopUp,
  addToggle,
  setAddTarget,
  username,
}) {
  return (
    <S.ContainerDiv>
      <C.ModalItem
        open={addPopUp}
        title="운동 추가"
        closeAction={() => addToggle(false)}
      >
        <p style={{ fontFamily: "sans-serif", color: "#A5A5A5" }}>운동명</p>
        <S.InputBoxInput
          style={{ marginBottom: "1rem" }}
          onChange={(e) => {
            setAddTarget(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "102%", height: "2.5rem" }}
          onClick={() => {
            categoryAddAPI({ username: username, title: addTarget });
            alert("add success!!!");
            addToggle(false);
            setActionDetector(actionDectector + 1);
          }}
        >
          추가하기
        </Button>
      </C.ModalItem>
      <C.ModalItem
        open={removePopUp}
        title="운동 제거"
        closeAction={() => removeToggle(false)}
      >
        <p style={{ fontFamily: "sans-serif", color: "#A5A5A5" }}>운동명</p>
        <S.InputBoxInput
          style={{ marginBottom: "1rem", color: "#A5A5A5" }}
          disabled
          defaultValue={target}
        />
        <Button
          variant="contained"
          sx={{ width: "102%", height: "2.5rem" }}
          onClick={() => {
            categoryRemoveAPI({ id: uid });
            alert("remove success!!!");
            removeToggle(false);
            setActionDetector(actionDectector + 1);
          }}
        >
          제거하기
        </Button>
      </C.ModalItem>
      <C.Header content={"홈"} />
      <div style={{ height: "3rem" }} />
      <C.CharacterBox level={5} str={100} currExp={320} maxExp={1000} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "flex-end",
        }}
      >
        <C.ImageWithText img={report} content="운동 관리" />
        <p
          style={{
            width: "90%",
            textAlign: "right",
            margin: "0",
            fontSize: "0.75rem",
            color: "#4E4BF6",
            cursor: "pointer",
            verticalAlign: "bottom",
            height: "1rem",
            marginBottom: "0.5rem",
          }}
          onClick={() => {
            addToggle(true);
          }}
        >
          추가하기
        </p>
      </div>
      <S.HealthManagementContainer>
        {categoryList.map(({ title, username, _id }) => {
          return (
            <C.HealthManagementItemDiv
              title={title}
              recent="2022. 09. 09(금)"
              last="23,696(EMG)"
              unique_id={_id}
              getTarget={getTarget}
            />
          );
        })}
      </S.HealthManagementContainer>
    </S.ContainerDiv>
  );
}

export default HomePresenter;
