import React, { useEffect, useState, useRef } from "react";
import HomePresenter from "./HomePresenter";
import {
  categoryListAPI,
  categoryAddAPI,
  categoryRemoveAPI,
  getUserSTRAPI,
} from "../../apis/category";
import { getUserStatusAPI, updateUserStatusAPI } from "../../apis/auth";

import w0 from "../../assets/img/sword/0.svg";
import w1 from "../../assets/img/sword/1.svg";
import w2 from "../../assets/img/sword/2.svg";
import w3 from "../../assets/img/sword/3.svg";
import w4 from "../../assets/img/sword/4.svg";
import w5 from "../../assets/img/sword/5.svg";
import w6 from "../../assets/img/sword/6.svg";
import w7 from "../../assets/img/sword/7.svg";
import w8 from "../../assets/img/sword/8.svg";
import w9 from "../../assets/img/sword/9.svg";
import w10 from "../../assets/img/sword/10.svg";

import b1 from "../../assets/img/background/1.svg";
import b2 from "../../assets/img/background/2.svg";
import b3 from "../../assets/img/background/3.svg";
import b4 from "../../assets/img/background/4.svg";
import b5 from "../../assets/img/background/5.svg";
import b6 from "../../assets/img/background/6.svg";
import b7 from "../../assets/img/background/7.svg";
import b8 from "../../assets/img/background/8.svg";
import b9 from "../../assets/img/background/9.svg";
import b10 from "../../assets/img/background/10.svg";
import b11 from "../../assets/img/background/11.svg";

import m0 from "../../assets/img/monster/0.svg";
import m1 from "../../assets/img/monster/1.svg";
import m2 from "../../assets/img/monster/2.svg";
import m3 from "../../assets/img/monster/3.svg";
import m4 from "../../assets/img/monster/4.svg";
import m5 from "../../assets/img/monster/5.svg";
import m6 from "../../assets/img/monster/6.svg";
import m7 from "../../assets/img/monster/7.svg";

const weaponList = {
  w0: {
    img: w0,
    effect: 0,
  },
  w1: {
    img: w1,
    effect: 1,
  },
  w2: {
    img: w2,
    effect: 3,
  },
  w3: {
    img: w3,
    effect: 5,
  },
  w4: {
    img: w4,
    effect: 8,
  },
  w5: {
    img: w5,
    effect: 13,
  },
  w6: {
    img: w6,
    effect: 20,
  },
  w7: {
    img: w7,
    effect: 40,
  },
  w8: {
    img: w8,
    effect: 100,
  },
  w9: {
    img: w9,
    effect: 500,
  },
  w10: {
    img: w10,
    effect: 1000,
  },
};

const backImgList = {
  b1: {
    img: b1,
  },
  b2: {
    img: b2,
  },
  b3: {
    img: b3,
  },
  b4: {
    img: b4,
  },
  b5: {
    img: b5,
  },
  b6: {
    img: b6,
  },
  b7: {
    img: b7,
  },
  b8: {
    img: b8,
  },
  b9: {
    img: b9,
  },
  b10: {
    img: b10,
  },
  b11: {
    img: b11,
  },
};

const mobList = {
  m0: {
    img: m0,
  },
  m1: {
    img: m1,
  },
  m2: {
    img: m2,
  },
  m3: {
    img: m3,
  },
  m4: {
    img: m4,
  },
  m5: {
    img: m5,
  },
  m6: {
    img: m6,
  },
  m7: {
    img: m7,
  },
};

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

function HomeContainer() {
  const [actionDetector, setActionDetector] = useState(1);

  const [removePopUp, removeToggle] = useState(false);
  const [addPopUp, addToggle] = useState(false);

  const [categoryList, setCategoryList] = useState([
    {
      title: "",
      username: "",
      totalPower: "",
      recentDate: "",
      category: "",
    },
  ]);
  const username = localStorage.getItem("username");

  const [target, setTarget] = useState();
  const [unique, setUnique] = useState();

  const [addTarget, setAddTarget] = useState();

  const [userStatus, setUserStatus] = useState({
    userLevel: 1,
    userEXP: 0,
    userMoney: 0,
    userWeapon: 0,
    userBackImg: 0,
  });

  const [userSTR, setUserSTR] = useState(0);

  const [clickEvent, setClickEvent] = useState(true);

  const onClickEvent = () => {
    // console.log("clicked!");
    // console.log(clickEvent);
    setClickEvent(!clickEvent);
    setUserStatus({
      ...userStatus,
      userEXP:
        userStatus.userEXP +
        userSTR +
        +(weaponList[userStatus.userWeapon]
          ? weaponList[userStatus.userWeapon].effect
          : 0),
    });
  };

  // useEffect(() => {
  //   console.log("userStatus: ", userStatus);
  // }, [userStatus]);

  useDidMountEffect(() => {
    const levelCheck = (currEXP, level) => {
      let maxEXP = 100 * 1.2 ** level;

      if (currEXP > maxEXP) {
        return 1;
      }
    };

    const updateStatus = async () => {
      let res;
      try {
        res = await updateUserStatusAPI({
          username: username,
          userLevel: userStatus.userLevel + 1,
          userEXP: 0,
          userMoney: Math.round(
            userStatus.userMoney + 100 * 1.2 ** userStatus.userLevel
          ),
          userWeapon: userStatus.userWeapon,
          userBackImg: userStatus.userBackImg,
        });

        setUserStatus({
          ...userStatus,
          userLevel: userStatus.userLevel + 1,
          userMoney: Math.round(
            userStatus.userMoney + 100 * 1.2 ** userStatus.userLevel
          ),
          userEXP: 0,
        });
      } catch (e) {
        // console.log(e);
      }
    };

    const updateEXPStatus = async () => {
      let res;
      try {
        res = await updateUserStatusAPI({
          username: username,
          userEXP: userStatus.userEXP,
          userLevel: userStatus.userLevel,
          userMoney: userStatus.userMoney,
          userWeapon: userStatus.userWeapon,
          userBackImg: userStatus.userBackImg,
        });
      } catch (e) {
        // console.log(e);
      }
    };

    if (levelCheck(userStatus.userEXP, userStatus.userLevel) === 1) {
      updateStatus();
    } else {
      updateEXPStatus();
    }
  }, [clickEvent]);

  // useEffect(() => {
  // console.log("target: ", target);
  // console.log("unique: ", unique);
  // }, [target, unique]);

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

    const getUserSTR = async () => {
      let res;
      try {
        res = await getUserSTRAPI({ username });
        setUserSTR(res.data + 1);
      } catch (e) {
        // console.log(e);
      }
    };

    Promise.all([getCategoryList(), getUserSTR()]);
  }, [actionDetector]);
  // useEffect(() => {
  // console.log("here changes: ", actionDetector);
  // }, [actionDetector]);

  // for test
  // useEffect(() => {
  //   console.log(categoryList);
  // }, [categoryList]);

  useEffect(() => {
    const getUserStatus = async () => {
      let res;
      try {
        res = await getUserStatusAPI({ username });
        setUserStatus({
          userLevel: res.data.userLevel,
          userEXP: res.data.userEXP,
          userMoney: res.data.userMoney,
          userWeapon: res.data.userWeapon,
          userBackImg: res.data.userBackImg,
        });
      } catch (e) {
        // console.log(e);
      }
    };

    getUserStatus();
  }, []);

  // useEffect(() => {
  //   console.log(userStatus);
  // }, [userStatus]);

  return (
    <HomePresenter
      categoryList={categoryList}
      getTarget={getTarget}
      target={target}
      uid={unique}
      removePopUp={removePopUp}
      removeToggle={(state) => removeToggle(state)}
      actionDetector={actionDetector}
      setActionDetector={setActionDetector}
      addTarget={addTarget}
      addPopUp={addPopUp}
      addToggle={addToggle}
      setAddTarget={setAddTarget}
      username={username}
      userStatus={userStatus}
      userSTR={userSTR}
      onClickEvent={onClickEvent}
      weaponList={weaponList}
      backImgList={backImgList}
      mobList={mobList}
    />
  );
}

export default HomeContainer;
