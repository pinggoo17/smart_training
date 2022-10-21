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
      <p>
        {"< "}&nbsp;2022. 09. 09&nbsp;{" >"}
      </p>
      <C.Graph />
      <C.ImageWithText img={report} content="운동 관리" />
      <S.HealthManagementContainer>
        <C.HealthManagementDisplayItemDiv
          title="운동량"
          goal={28435}
          last={23696}
          curr={16587}
          img={smile}
          unit="EMG"
          size={true}
        />
        <C.HealthManagementItemDiv
          title="추천냥"
          img={cat}
          content={
            "팔굽혀 펴기 종목에서\n\
          \n\
          지난 운동량 보다  현재 운동량이 적습니다.\n\
          \n\
          추가적인 운동을 실시할 것을 권장드립니다."
          }
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
