import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import {
  categoryListAPI,
  categoryAddAPI,
  categoryRemoveAPI,
} from "../../apis/category";

function HomeContainer() {
  const [actionDectector, setActionDetector] = useState(1);

  const [removePopUp, removeToggle] = useState(false);
  const [addPopUp, addToggle] = useState(false);

  const [categoryList, setCategoryList] = useState([
    {
      title: "",
      username: "",
      _id: "",
    },
  ]);
  const username = localStorage.getItem("username");

  const [target, setTarget] = useState();
  const [unique, setUnique] = useState();

  const [addTarget, setAddTarget] = useState();

  useEffect(() => {
    console.log("target: ", target);
    console.log("unique: ", unique);
  }, [target, unique]);

  const getTarget = ({ target, unique }) => {
    setTarget(target);
    setUnique(unique);
    removeToggle(true);
  };

  useEffect(() => {
    const getCategoryList = async () => {
      let res;
      try {
        res = await categoryListAPI({
          username,
        });
        setCategoryList(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    Promise.all([getCategoryList()]);
  }, [actionDectector]);

  useEffect(() => {
    console.log("here changes: ", actionDectector);
  }, [actionDectector]);

  // for test
  useEffect(() => {
    console.log(categoryList);
  }, [categoryList]);

  return (
    <HomePresenter
      categoryList={categoryList}
      getTarget={getTarget}
      target={target}
      uid={unique}
      removePopUp={removePopUp}
      removeToggle={(state) => removeToggle(state)}
      actionDectector={actionDectector}
      setActionDetector={setActionDetector}
      addTarget={addTarget}
      addPopUp={addPopUp}
      addToggle={addToggle}
      setAddTarget={setAddTarget}
      username={username}
    />
  );
}

export default HomeContainer;
