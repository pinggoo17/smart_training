import { CatchingPokemon } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { categoryItemAddAPI, categoryItemListAPI } from "../../apis/category";
import DetailPresenter from "./DetailPresenter";

function DetailContainer() {
  const [actionDectector, setActionDetector] = useState(1);
  const username = localStorage.getItem("username");
  const categoryId = localStorage.getItem("unique_id");
  const targetHealth = localStorage.getItem("target_health");

  const targetDate = "123";

  const [power, setPower] = useState(0);
  const [estimatePopUp, togglePopUp] = useState(false);
  const [itemList, setItemList] = useState([{ power: 0, date: "123" }]);

  const onClickEstimate = async () => {
    let res;

    console.log(parseFloat(power));
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
      console.log(e);
    }
  };

  useEffect(() => {
    const getItemList = async () => {
      let res;
      try {
        // console.log("here: ", { username, categoryId, targetDate });
        res = await categoryItemListAPI({ username, categoryId, targetDate });
        // setItemList(res);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    Promise.all([getItemList()]);
  }, [actionDectector]);

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
    />
  );
}

export default DetailContainer;
