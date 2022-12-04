import { CatchingPokemon } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { getUserStatusAPI } from "../../apis/auth";
import {
  categoryItemAddAPI,
  categoryItemListAPI,
  categoryUpdateAPI,
  categoryItemParamAPI,
} from "../../apis/category";
import DetailPresenter from "./DetailPresenter";

function DetailContainer() {
  const [actionDectector, setActionDetector] = useState(1);
  const username = localStorage.getItem("username");
  const categoryId = localStorage.getItem("unique_id");
  const targetHealth = localStorage.getItem("target_health");

  const [targetDate, setTargetDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [power, setPower] = useState(0);
  const [time, setTime] = useState(0);

  const [goalValue, setGoalValue] = useState(0.1);
  const [estimatePopUp, togglePopUp] = useState(false);
  const [goalPopUp, toggleGoalPopUp] = useState(false);
  const [itemList, setItemList] = useState([{ power: 0, date: "" }]);

  const [rawData, setRawData] = useState();
  const [timeRawData, setTimeRawData] = useState();
  const [lastAct, setLastAct] = useState(0);
  const [currAct, setCurrAct] = useState(0);

  const [currTime, setCurrTime] = useState(0);
  const [lastTimeMean, setLastTimeMean] = useState(0);

  const [recMsg, setRecMsg] = useState("");

  // useEffect(() => {
  //   console.log("lastTimeMean: ", lastTimeMean);
  //   console.log("currTime: ", currTime);
  // }, [currTime, lastTimeMean]);

  useEffect(() => {
    // console.log(lastAct * (1 + goalValue));

    let recmsg = "";

    if (currAct === 0) {
      recmsg += "운동을 진행해주세요.\n\n";
    } else if (lastAct === 0) {
      recmsg +=
        "처음으로 운동량을 측정 중입니다. \n\n 다음 운동시에는 현재 운동량을 기반으로\n목표 운동량이 설정됩니다.\n\n";
    } else if (currAct < lastAct) {
      recmsg +=
        "지난 운동량 보다 현재 운동량이 적습니다. \n\n추가적인 운동을 진행해주세요!\n\n";
    } else if (currAct >= lastAct * (1 + goalValue)) {
      recmsg += "목표 운동량에 도달했습니다. \n\n";
    } else if (currAct < lastAct * (1 + goalValue)) {
      recmsg +=
        "지난 운동량을 초과했습니다! \n\n목표 운동량까지 운동을 진행해주세요!\n\n";
    }

    if (currAct === 0) {
    } else if (lastAct === 0) {
    } else if (currTime > lastTimeMean) {
      recmsg += "방금 진행한 세트가 지난 운동 시간보다,\n 오래 걸렸습니다.\n\n";
    } else {
      recmsg += "방금 진행한 세트가 지난 운동 시간보다,\n 적게 걸렸습니다.\n\n";
    }

    if (currAct === 0) {
    } else if (lastAct === 0) {
    } else if (currAct < lastAct) {
    } else if (currAct >= lastAct * (1 + goalValue)) {
      recmsg += "수고하셨습니다. \n\n";
    } else if (currAct < lastAct * (1 + goalValue)) {
    }

    setRecMsg(recmsg);
  }, [currAct, lastAct, goalValue, currTime, lastTimeMean]);

  const addDay = (currDate, day) => {
    var date = new Date(currDate);
    date.setDate(date.getDate() + day);
    setTargetDate(date.toISOString().split("T")[0]);
    // console.log("here date:", date.toISOString().split("T")[0]);
  };

  const onClickEstimate = async () => {
    let res;

    // console.log(parseFloat(power));
    try {
      res = await categoryItemAddAPI({
        username,
        categoryId,
        power: parseFloat(power),
        time: parseFloat(time),
      });
      alert("estimate success!!");
      togglePopUp(false);
      setActionDetector(actionDectector + 1);
    } catch (e) {
      // console.log(e);
    }
  };

  const onClickGoalModify = async () => {
    let res;

    // console.log(parseFloat(goalValue));
    try {
      res = await categoryUpdateAPI({
        id: categoryId,
        userParameter: parseFloat(goalValue),
      });
      alert("goal modification success!!");
      toggleGoalPopUp(false);
      setActionDetector(actionDectector + 1);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    const getItemList = async () => {
      let res;
      try {
        // console.log("here: ", { username, categoryId, targetDate });
        res = await categoryItemListAPI({ username, categoryId, targetDate });
        // setItemList(res);
        // console.log(res.data);

        let temp = {};
        let timeTemp = {};

        res.data.map((element) => {
          // console.log("element: ", element.date.split("T")[0]);
          if (temp[element.date.split("T")[0]] === undefined) {
            temp[element.date.split("T")[0]] = [];
            timeTemp[element.date.split("T")[0]] = [];
          }
          temp[element.date.split("T")[0]].push(element.power);
          timeTemp[element.date.split("T")[0]].push(element.time);
        });

        setRawData(temp);
        setTimeRawData(timeTemp);
      } catch (e) {
        // console.log(e);
      }
    };

    const getGoalParam = async () => {
      let res;
      try {
        res = await categoryItemParamAPI({ categoryId });
        // console.log("categoryId: ", categoryId);
        // console.log("goal: ", res.data[0].userParameter);
        setGoalValue(res.data[0].userParameter);
      } catch (e) {
        // console.log(e);
      }
    };

    Promise.all([getItemList(), getGoalParam()]);
  }, [actionDectector]);

  useEffect(() => {
    let tempKey = "";
    let tempLastKey = "";

    try {
      // console.log("rawData: ", rawData);

      let targetDateIndex = Object.keys(rawData).indexOf(targetDate);

      if (targetDateIndex === -1) {
        setCurrAct(0);
        setCurrTime(0);
        throw "no data";
      }

      tempKey = targetDate;

      // console.log("now list: ", Object.keys(rawData));
      // console.log("targetDate: ", targetDate);
      // console.log("targetDateIndex: ", targetDateIndex);

      // console.log("rawData: ", rawData);

      // console.log("here tempkey: ", tempKey);
      // console.log("here: ", rawData[tempKey]);
      // console.log(
      //   "curr act sum: ",
      //   rawData[tempKey].reduce((a, b) => a + b, 0)
      // );

      setCurrAct(rawData[tempKey].reduce((a, b) => a + b, 0));
      setCurrTime(timeRawData[tempKey][timeRawData[tempKey].length - 1]);

      tempLastKey = Object.keys(rawData)[targetDateIndex - 1];
      // console.log("tempLastKey: ", tempLastKey);
      // console.log("here: ", rawData[tempLastKey]);
      // console.log(
      //   "last act sum: ",
      //   rawData[tempLastKey].reduce((a, b) => a + b, 0)
      // );

      setLastAct(rawData[tempLastKey].reduce((a, b) => a + b, 0));
      let timeSum = timeRawData[tempLastKey].reduce((a, b) => a + b, 0);
      timeSum = timeSum / timeRawData[tempLastKey].length;

      setLastTimeMean(timeSum);

      // console.log("curr act: ", currAct);
      // console.log("last act: ", lastAct);
      // console.log("last time: ", lastTimeMean);
    } catch (err) {
      // console.log("rawData: ", rawData);
      // console.log("targetDate: ", targetDate);

      try {
        let newTargetDate = "";
        let check = 1;

        for (let step = Object.keys(rawData).length - 1; step >= 0; step--) {
          if (Object.keys(rawData)[step] < targetDate) {
            // console.log("Object.keys(rawData): ", Object.keys(rawData));
            // console.log(
            //   "Object.keys(rawData)[step]: ",
            //   Object.keys(rawData)[step]
            // );
            // console.log("targetDate: ", targetDate);
            newTargetDate = Object.keys(rawData)[step];
            check = 0;
            break;
          }
        }

        if (check) {
          setLastAct(0);
          setLastTimeMean(0);
        }

        tempLastKey = newTargetDate;
        // console.log("tempLastKey: ", tempLastKey);
        // console.log("here: ", rawData[tempLastKey]);
        // console.log(
        //   "last act sum: ",
        //   rawData[tempLastKey].reduce((a, b) => a + b, 0)
        // );

        setLastAct(rawData[tempLastKey].reduce((a, b) => a + b, 0));
        let timeSum = timeRawData[tempLastKey].reduce((a, b) => a + b, 0);
        timeSum = timeSum / timeRawData[tempLastKey].length;

        setLastTimeMean(timeSum);

        // console.log("curr act2: ", currAct);
        // console.log("last act2: ", lastAct);
        // console.log("last time2: ", lastTimeMean);
      } catch (err2) {}
    }
  }, [rawData, currAct, lastAct, targetDate, timeRawData, lastTimeMean]);

  return (
    <DetailPresenter
      estimatePopUp={estimatePopUp}
      togglePopUp={togglePopUp}
      itemList={itemList}
      power={power}
      setPower={setPower}
      targetHealth={targetHealth}
      onClickEstimate={onClickEstimate}
      setActionDetector={setActionDetector}
      rawData={rawData}
      currAct={currAct}
      lastAct={lastAct}
      goalPopUp={goalPopUp}
      toggleGoalPopUp={toggleGoalPopUp}
      onClickGoalModify={onClickGoalModify}
      goalValue={goalValue}
      setGoalValue={setGoalValue}
      targetDate={targetDate}
      setTargetDate={setTargetDate}
      addDay={addDay}
      recMsg={recMsg}
      setTime={setTime}
      timeRawData={timeRawData}
    />
  );
}

export default DetailContainer;
