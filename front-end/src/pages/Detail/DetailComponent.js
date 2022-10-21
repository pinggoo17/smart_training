import React from "react";
import * as S from "./DetailStyled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "운동 차트",
      fontSize: "1rem",
    },
  },
};

const labels = ["1set", "2set", "3set", "4set", "5set", "6set", "7set"];

export function Graph() {
  return <Line options={options} data={data} />;
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

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0.25,
    },
  ],
};

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
      <img
        src={img}
        alt="content"
        style={{ width: "1rem", objectFit: "contain" }}
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
          {goal.toString()}({unit})
        </p>
      </S.NoMarginP2>
      <S.NoMarginP2>
        지난 운동량
        <p style={{ color: "#A5A5A5", display: "inline", marginLeft: "1rem" }}>
          {last.toString()}({unit})
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
        <ProgressBar percent={last / goal} />
      </div>

      <S.NoMarginP2>
        현재 운동량
        <p style={{ color: "#A5A5A5", display: "inline", marginLeft: "1rem" }}>
          {curr.toString()}({unit})
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
        <ProgressBar percent={curr / goal} />
      </div>
    </S.HealthManagementItemDiv>
  );
}

export function ProgressBar({ percent }) {
  percent = Math.round(percent * 100);
  return (
    <div
      style={{
        width: "90%",
        backgroundColor: "#A5A5A5",
        height: "1.5rem",
        borderRadius: "2px",
      }}
    >
      <div
        style={{
          width: `${percent}%`,
          height: "100%",
          backgroundColor: "#BFDEEC",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            display: "inline",
            margin: 0,
            paddingTop: "0.1rem",
          }}
        >
          {percent}%
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
