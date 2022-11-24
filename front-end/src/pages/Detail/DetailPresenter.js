import React from "react";

import * as C from "./DetailComponent";
import * as S from "./DetailStyled";

import report from "../../assets/img/report.svg";
import smile from "../../assets/img/smile.svg";
import cat from "../../assets/img/cat.svg";
import { Button } from "@mui/material";

function DetailPresenter({
  estimatePopUp,
  togglePopUp,
  itemList,
  power,
  setPower,
  targetHealth,
  categoryId,
  onClickEstimate,
  setActionDetector,
  rawData,
  currAct,
  lastAct,
  goalPopUp,
  toggleGoalPopUp,
  goalValue,
  setGoalValue,
  onClickGoalModify,
  targetDate,
  setTargetDate,
  addDay,
}) {
  return (
    <S.ContainerDiv>
      <div style={{ height: "3rem", marginBottom: 0 }} />
      <C.Header content={targetHealth} />
      <C.ModalItem
        open={estimatePopUp}
        title="운동 측정"
        onClickClose={() => togglePopUp(false)}
      >
        <p style={{ fontFamily: "sans-serif", color: "#A5A5A5" }}>운동명</p>
        <S.InputBoxInput
          style={{ marginBottom: "1rem", color: "#A5A5A5" }}
          disabled
          defaultValue={targetHealth}
        />
        <S.InputBoxInput
          style={{ marginBottom: "1rem", color: "#A5A5A5" }}
          onChange={(e) => {
            setPower(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "102%", height: "2.5rem" }}
          onClick={onClickEstimate}
        >
          측정완료
        </Button>
      </C.ModalItem>

      <C.ModalItem
        open={goalPopUp}
        title="증진 목표 변경"
        onClickClose={() => toggleGoalPopUp(false)}
      >
        <p style={{ fontFamily: "sans-serif", color: "#A5A5A5" }}>운동명</p>
        <S.InputBoxInput
          style={{ marginBottom: "1rem", color: "#A5A5A5" }}
          disabled
          defaultValue={targetHealth}
        />
        <S.InputBoxInput
          style={{ marginBottom: "1rem", color: "#A5A5A5" }}
          onChange={(e) => {
            setGoalValue(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "102%", height: "2.5rem" }}
          onClick={onClickGoalModify}
        >
          수정완료
        </Button>
      </C.ModalItem>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <p
          style={{ display: "inline" }}
          onClick={() => {
            addDay(targetDate, -1);
          }}
        >
          {"< "}
        </p>
        <p style={{ display: "inline" }}>&nbsp;{targetDate}&nbsp;</p>
        <p
          style={{ display: "inline" }}
          onClick={() => {
            addDay(targetDate, 1);
          }}
        >
          {" >"}
        </p>
      </div>
      <C.Graph rawData={rawData} targetDate={targetDate} />
      <C.ImageWithText
        img={report}
        content="운동 관리"
        toggleGoalPopUp={() => toggleGoalPopUp(true)}
        goalValue={goalValue}
      />
      <S.HealthManagementContainer>
        <C.HealthManagementDisplayItemDiv
          title="운동량"
          goal={lastAct * (goalValue + 1.0)}
          last={lastAct}
          curr={currAct}
          img={smile}
          unit="EMG"
          size={true}
        />
        <C.HealthManagementItemDiv
          title="추천냥"
          img={cat}
          content={"in developing...\n\n"}
        />
      </S.HealthManagementContainer>
      <S.HealthManagementContainer
        style={{
          position: "fixed",
          bottom: "-3rem",
          height: "5rem",
          paddingTop: "1rem",
          width: "23rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#BFDEEC",
            padding: "0.5rem",
            borderRadius: "15px",
            width: "80%",
          }}
        >
          <p
            style={{
              margin: "0",
              textAlign: "center",
              color: "white",
              fontSize: "1.5rem",
            }}
            onClick={() => togglePopUp(true)}
          >
            측&nbsp;&nbsp;&nbsp;정
          </p>
        </div>
      </S.HealthManagementContainer>
    </S.ContainerDiv>
  );
}

export default DetailPresenter;
