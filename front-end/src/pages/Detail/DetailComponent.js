import React from "react";
import * as S from "./DetailStyled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import faker from "faker";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: false,
      text: "운동 차트",
      fontSize: "1rem",
    },
  },
  scales: {
    y: {
      type: "linear",
      disaply: true,
      position: "left",
      grid: {
        drawOnChartArea: false,
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
    },
  },
};

const labels = ["1set", "2set", "3set", "4set", "5set", "6set", "7set"];

export function Graph({ rawData, targetDate, timeRawData }) {
  let tempData = [];
  let tempTimeData = [];
  let tempLabel = [];
  let tempKey = "";

  // console.log(timeRawData);

  let aData = {
    labels: [],
    datasets: [
      {
        type: "line",
        label: "운동량",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        lineTension: 0.25,
        yAxisID: "y",
      },
      {
        type: "bar",
        label: "소요 시간",
        data: [],
        borderColor: "rgb(132, 99, 255)",
        backgroundColor: "rgba(132, 99, 255, 0.5)",
        lineTension: 0.25,
        yAxisID: "y1",
      },
    ],
  };

  try {
    if (rawData !== undefined && timeRawData !== undefined) {
      // console.log("rawData", rawData);
      // console.log("rawData !== undefined", rawData !== undefined);
      // console.log("rawData !== {}", rawData !== {});
      // console.log("rawData.keys", Object.keys(rawData));
      // console.log("rawData.keys.length", Object.keys(rawData).length);

      // tempKey = Object.keys(rawData)[Object.keys(rawData).length - 1];
      // console.log("component rawDate: ", rawData);
      // console.log("component targetDate: ", targetDate);
      tempKey = targetDate;
      // console.log("Object.keys(rawData): ", Object.keys(rawData));
      // console.log("component tempKey: ", tempKey);
      // console.log("tempKey: ", tempKey);

      tempData = rawData[tempKey];
      tempTimeData = timeRawData[tempKey];

      // console.log("component tempData:", tempData);

      // if (tempKey === new Date().toISOString().split("T")[0]) {
      //   // console.log("같습니다!!");
      // } else {
      //   // console.log("다릅니다!!");
      //   throw "not today";
      // }

      for (let i = 0; i < tempData.length; i++) {
        tempLabel.push(`${i + 1}set`);
      }

      // console.log("tempLabel: ", tempLabel);
      // console.log("tempData: ", tempData);
      // console.log("tempTimeData: ", tempTimeData);

      aData = {
        labels: tempLabel,
        datasets: [
          {
            label: "운동량",
            data: tempData,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            lineTension: 0.25,
            yAxisID: "y",
          },
          {
            label: "소요 시간",
            data: tempTimeData,
            borderColor: "rgb(132, 99, 255)",
            backgroundColor: "rgba(132, 99, 255, 0.5)",
            lineTension: 0.25,
            yAxisID: "y1",
          },
        ],
      };
    }
  } catch (err) {
    // console.log(err);
  }
  return <Chart options={options} data={aData} />;
}

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

export function ImageWithText({ content, img, toggleGoalPopUp, goalValue }) {
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
      <p
        style={{
          margin: "0",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10pt",
          color: "#4E4BF6",
        }}
        onClick={toggleGoalPopUp}
      >
        (증진 목표: {goalValue * 100}%)
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
        top: "-2rem",
        left: "1rem",
      }}
    >
      <img
        src={img}
        alt="content"
        style={{ width: "1.5rem", objectFit: "contain" }}
      />
      <p
        style={{
          fontWeight: "800",
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
export function HealthManagementItemDiv({ title, content, img }) {
  return (
    <S.HealthManagementItemDiv>
      <ImageWithText2 content={title} img={img} />
      <S.NoMarginP2 style={{ whiteSpace: "pre-line" }}>{content}</S.NoMarginP2>
    </S.HealthManagementItemDiv>
  );
}

export function HealthManagementDisplayItemDiv({
  title,
  goal,
  last,
  curr,
  img,
  unit,
  size = false,
}) {
  return (
    <S.HealthManagementItemDiv>
      <ImageWithText2 content={title} img={img} />
      <S.NoMarginP2
        style={{ height: size ? "3rem" : undefined, position: "relative" }}
      >
        <p style={{ display: "inline" }}>목표 운동량 </p>
        <p
          style={{
            margin: 0,
            padding: 0,
            paddingRight: "1rem",
            textAlign: "center",
            color: "#A5A5A5",
            display: "inline",
            fontSize: size ? "1.5rem" : undefined,
            paddingLeft: size ? "1.5rem" : undefined,
            position: "absolute",
          }}
        >
          {insertCommas(Math.floor(goal).toString())}({unit})
        </p>
      </S.NoMarginP2>
      <S.NoMarginP2>
        지난 운동량
        <p style={{ color: "#A5A5A5", display: "inline", marginLeft: "1rem" }}>
          {insertCommas(last.toString())}({unit})
        </p>
      </S.NoMarginP2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <ProgressBar percent={last / goal} goal={goal} curr={curr} />
      </div>

      <S.NoMarginP2>
        현재 운동량
        <p style={{ color: "#A5A5A5", display: "inline", marginLeft: "1rem" }}>
          {insertCommas(curr.toString())}({unit})
        </p>
      </S.NoMarginP2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <ProgressBar percent={curr / goal} goal={goal} />
      </div>
    </S.HealthManagementItemDiv>
  );
}

export function ProgressBar({ percent, goal }) {
  percent = Math.round(percent * 100);
  // console.log("goal: ", goal);
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
          width: `${goal === 0 ? 100 : percent}%`,
          height: "100%",
          backgroundColor: "#BFDEEC",
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
          {goal === 0 ? 100 : percent}%
        </p>
      </div>
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

export function ModalItem({ open, title, onClickClose, children }) {
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
            <CloseIcon onClick={onClickClose} />
          </div>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
