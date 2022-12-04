import React, { useEffect, useRef, useState } from "react";
import ShopPresenter from "./ShopPresenter";
import { getUserStatusAPI, updateUserStatusAPI } from "../../apis/auth";

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

import cc from "../../assets/img/product/cc.jpg";
import cf from "../../assets/img/product/cf.svg";
import ch from "../../assets/img/product/ch.jpg";
import dn from "../../assets/img/product/dn.jpg";
import lt from "../../assets/img/product/lt.jpg";

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

const weaponList = [
  {
    title: "초보자용 칼",
    expl: "초보자가 사용하기 좋은 칼",
    effec: "STR + 1",
    item: "w1",
    img: w1,
    type: "weapon",
    price: 100,
  },
  {
    title: "사냥용 칼",
    expl: "사냥할 때 사용하기 좋은 칼",
    effec: "STR + 3",
    item: "w2",
    img: w2,
    type: "weapon",
    price: 1000,
  },
  {
    title: "기사용 칼",
    expl: "기사가 사용하는 칼",
    effec: "STR + 5",
    item: "w3",
    img: w3,
    type: "weapon",
    price: 5000,
  },
  {
    title: "대인용 칼",
    expl: "사람의 상대할 때, 사용하는 칼",
    effec: "STR + 8",
    item: "w4",
    img: w4,
    type: "weapon",
    price: 10000,
  },
  {
    title: "전문가용 칼",
    expl: "전문가가 사용하는 칼",
    effec: "STR + 13",
    item: "w5",
    img: w5,
    type: "weapon",
    price: 50000,
  },
  {
    title: "숙련된 기사용 칼",
    expl: "숙련된 기사가 사용하는 칼",
    effec: "STR + 20",
    item: "w6",
    img: w6,
    type: "weapon",
    price: 100000,
  },
  {
    title: "장인의 칼",
    expl: "장인이 직접만든 칼",
    effec: "STR + 40",
    item: "w7",
    img: w7,
    type: "weapon",
    price: 300000,
  },
  {
    title: "달인의 칼",
    expl: "달인이 직접만든 칼",
    effec: "STR + 100",
    item: "w8",
    img: w8,
    type: "weapon",
    price: 50000,
  },
  {
    title: "최고급 사냥꾼용 칼",
    expl: "매우 뛰어난 사냥꾼용 칼",
    effec: "STR + 500",
    item: "w9",
    img: w9,
    type: "weapon",
    price: 100000,
  },
  {
    title: "용사의 칼",
    expl: "용사가 사용하던 칼",
    effec: "STR + 1000",
    item: "w10",
    img: w10,
    type: "weapon",
    price: 200000,
  },
];

const backImgList = [
  {
    title: "알록달록 공간",
    expl: "알록달록한 공간이다.",
    item: "b1",
    img: b1,
    type: "backImg",
    price: 1000,
  },
  {
    title: "힐링 공간",
    expl: "초록 빛과 풀잎이 있는 공간이다.",
    item: "b2",
    img: b2,
    type: "backImg",
    price: 1000,
  },

  {
    title: "고요의 공간",
    expl: "고요한 밤의 풍경이다",
    item: "b3",
    img: b3,
    type: "backImg",
    price: 1000,
  },
  {
    title: "아기자기한 공간",
    expl: "아기자기한 공간이다.",
    item: "b4",
    img: b4,
    type: "backImg",
    price: 1000,
  },
  {
    title: "쿠키의 공간",
    expl: "쿠키가 매달려있는 공간이다.",
    item: "b5",
    img: b5,
    type: "backImg",
    price: 1000,
  },
  {
    title: "심플의 공간",
    expl: "심플한 공간이다.",
    item: "b6",
    img: b6,
    type: "backImg",
    price: 1000,
  },
  {
    title: "하늘의 공간",
    expl: "구름위의 공간이다.",
    item: "b7",
    img: b7,
    type: "backImg",
    price: 1000,
  },
  {
    title: "바다의 공간",
    expl: "바다 느낌이 나는 푸른 공간이다.",
    item: "b8",
    img: b8,
    type: "backImg",
    price: 1000,
  },
  {
    title: "진한 알록달록한 공간",
    expl: "자주 빛이 도는 알록달록한 공간이다.",
    item: "b9",
    img: b9,
    type: "backImg",
    price: 1000,
  },
  {
    title: "보석의 공간",
    expl: "보석의 수정과 같은 풍경이다",
    item: "b10",
    img: b10,
    type: "backImg",
    price: 1000,
  },
  {
    title: "죽음의 공간",
    expl: "해골이 그려져 있는 공간이다.",
    item: "b11",
    img: b11,
    type: "backImg",
    price: 1000,
  },
];

const productList = [
  {
    title: "닭 가슴살",
    expl: "단백질을 책임져주는 닭 가슴살이다.",
    item: "cc",
    img: cc,
    type: "food",
    price: 200000,
  },
  {
    title: "커피 기프티콘",
    expl: "적절한 카페인 섭취는\n운동 집중력을 향상시켜준다.",
    item: "cf",
    img: cf,
    type: "food",
    price: 100000,
  },
  {
    title: "치킨 기프티콘",
    expl: "치킨 껍데기는 벗겨서 먹자.",
    item: "ch",
    img: ch,
    type: "food",
    price: 400000,
  },
  {
    title: "도넛 기프티콘",
    expl: "사서 선물하는 것이 좋아보인다.",
    item: "dn",
    img: dn,
    type: "food",
    price: 200000,
  },
  {
    title: "레몬티",
    expl: "레몬티는 다이어트에\n효과적이라는 말이 있다.",
    item: "lt",
    img: lt,
    type: "food",
    price: 100000,
  },
];

function ShopContainer() {
  const username = localStorage.getItem("username");

  const [targetItem, setTargetItem] = useState({
    img: "",
    item: 0,
    type: "",
    price: 0,
  });

  const [isModalOpen, toggleModal] = useState(false);

  const [isBuy, setIsBuy] = useState(false);

  const [userStatus, setUserStatus] = useState({
    userLevel: 1,
    userEXP: 0,
    userMoney: 0,
    userWeapon: 0,
    userBackImg: 0,
  });

  const [clickEvent, setClickEvent] = useState(true);

  const onClickEvent = () => {
    setClickEvent(!clickEvent);
  };

  const doPurchase = async () => {
    // console.log("userMoney: ", userStatus.userMoney - targetItem.price);

    if (targetItem.type === "weapon") {
      await updateUserStatusAPI({
        username: username,
        ...userStatus,
        userWeapon: targetItem.item,
        userMoney: userStatus.userMoney - targetItem.price,
      });

      setUserStatus({
        ...userStatus,
        userBackImg: targetItem.item,
        userWeapon: targetItem.item,
        userMoney: userStatus.userMoney - targetItem.price,
      });
    } else if (targetItem.type === "backImg") {
      await updateUserStatusAPI({
        username: username,
        ...userStatus,
        userBackImg: targetItem.item,
        userMoney: userStatus.userMoney - targetItem.price,
      });

      setUserStatus({
        ...userStatus,
        userBackImg: targetItem.item,
        userMoney: userStatus.userMoney - targetItem.price,
      });
    } else if (targetItem.type === "food") {
      await updateUserStatusAPI({
        username: username,
        ...userStatus,
        userMoney: userStatus.userMoney - targetItem.price,
      });

      setUserStatus({
        ...userStatus,
        userMoney: userStatus.userMoney - targetItem.price,
      });
    }
  };

  useDidMountEffect(() => {}, [clickEvent]);

  useEffect(() => {
    // console.log("targetItem: ", targetItem);
    // console.log("userStatus.userMoney: ", userStatus.userMoney);

    if (userStatus.userMoney >= targetItem.price) {
      setIsBuy(true);
    } else {
      setIsBuy(false);
    }
  }, [targetItem, userStatus]);

  // useEffect(() => {
  //   console.log("isBuy:", isBuy);
  // }, [isBuy]);

  // useEffect(() => {
  //   console.log(targetItem);
  // }, [targetItem]);

  // useEffect(() => {
  //   console.log(userStatus);
  // }, [userStatus]);

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

  return (
    <ShopPresenter
      targetItem={targetItem}
      setTargetItem={setTargetItem}
      isModalOpen={isModalOpen}
      toggleModal={toggleModal}
      userStatus={userStatus}
      isBuy={isBuy}
      doPurchase={doPurchase}
      weaponList={weaponList}
      backImgList={backImgList}
      onClickEvent={onClickEvent}
      productList={productList}
    />
  );
}

export default ShopContainer;
