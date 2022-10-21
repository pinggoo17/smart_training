import React from "react";
import * as S from "./LoginStyled";

export function InputBoxWithImg({ placeholder, setString, img, alt }) {
  return (
    <S.InputBoxDiv>
      <S.ImageBox src={img} />
      <S.InputBoxInput
        placeholder={placeholder}
        onChange={(e) => setString(e.target.value)}
        alt={alt}
      />
    </S.InputBoxDiv>
  );
}
