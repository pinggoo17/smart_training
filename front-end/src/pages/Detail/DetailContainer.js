import { CatchingPokemon } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
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
  const [goalValue, setGoalValue] = useState(0.1);
  const [estimatePopUp, togglePopUp] = useState(false);
  const [goalPopUp, toggleGoalPopUp] = useState(false);
  const [itemList, setItemList] = useState([{ power: 0, date: "" }]);

  const [rawData, setRawData] = useState();
  const [lastAct, setLastAct] = useState(0);
  const [currAct, setCurrAct] = useState(0);

  const addDay = (currDate, day) => {
    var date = new Date(currDate);
    date.setDate(date.getDate() + day);
    setTargetDate(date.toISOString().split("T")[0]);
    console.log("here date:", date.toISOString().split("T")[0]);
  };

  const onClickEstimate = async () => {
    let res;

    // console.log(parseFloat(power));
    try {
      res = await categoryItemAddAPI({
        username,
        categoryId,
        power: parseFloat(power),
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

    console.log(parseFloat(goalValue));
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

        res.data.map((element) => {
          // console.log("element: ", element.date.split("T")[0]);
          if (temp[element.date.split("T")[0]] === undefined) {
            temp[element.date.split("T")[0]] = [];
          }
          temp[element.date.split("T")[0]].push(element.power);
        });

        setRawData(temp);
      } catch (e) {
        // console.log(e);
      }
    };

    const getGoalParam = async () => {
      let res;
      try {
        res = await categoryItemParamAPI({ categoryId });
        setGoalValue(res.data);
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
      console.log("rawData: ", rawData);

      let targetDateIndex = Object.keys(rawData).indexOf(targetDate);

      if (targetDateIndex === -1) {
        setCurrAct(0);
        throw "no data";
      }

      tempKey = targetDate;

      console.log("now list: ", Object.keys(rawData));
      console.log("targetDate: ", targetDate);
      console.log("targetDateIndex: ", targetDateIndex);

      // console.log("rawData: ", rawData);

      // console.log("here tempkey: ", tempKey);
      // console.log("here: ", rawData[tempKey]);
      // console.log(
      //   "curr act sum: ",
      //   rawData[tempKey].reduce((a, b) => a + b, 0)
      // );

      setCurrAct(rawData[tempKey].reduce((a, b) => a + b, 0));

      tempLastKey = Object.keys(rawData)[targetDateIndex - 1];
      console.log("tempLastKey: ", tempLastKey);
      console.log("here: ", rawData[tempLastKey]);
      // console.log(
      //   "last act sum: ",
      //   rawData[tempLastKey].reduce((a, b) => a + b, 0)
      // );

      setLastAct(rawData[tempLastKey].reduce((a, b) => a + b, 0));

      // console.log("curr act: ", currAct);
      // console.log("last act: ", lastAct);
    } catch (err) {
      console.log("rawData: ", rawData);
      console.log("targetDate: ", targetDate);

      try {
        let newTargetDate = "";
        let check = 1;

        for (let step = Object.keys(rawData).length - 1; step >= 0; step--) {
          if (Object.keys(rawData)[step] < targetDate) {
            console.log("Object.keys(rawData): ", Object.keys(rawData));
            console.log(
              "Object.keys(rawData)[step]: ",
              Object.keys(rawData)[step]
            );
            console.log("targetDate: ", targetDate);
            newTargetDate = Object.keys(rawData)[step];
            check = 0;
            break;
          }
        }

        if (check) {
          setLastAct(0);
        }

        tempLastKey = newTargetDate;
        // console.log("tempLastKey: ", tempLastKey);
        // console.log("here: ", rawData[tempLastKey]);
        // console.log(
        //   "last act sum: ",
        //   rawData[tempLastKey].reduce((a, b) => a + b, 0)
        // );

        setLastAct(rawData[tempLastKey].reduce((a, b) => a + b, 0));

        // console.log("curr act2: ", currAct);
        // console.log("last act2: ", lastAct);
      } catch (err2) {}
    }
  }, [rawData, currAct, lastAct, targetDate]);

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
    />
  );
}

export default DetailContainer;
