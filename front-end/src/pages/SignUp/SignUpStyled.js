import styled from "styled-components";

export const InputBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f3f3f3;
  margin-bottom: 2rem;
  width: 100%;
`;

export const ImageBox = styled.img`
  width: 1rem;
  object-fit: contain;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const InputBoxInput = styled.input`
  border: 0;
  background-color: transparent;
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
`;

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
