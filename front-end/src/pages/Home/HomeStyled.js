import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;
  border-bottom: 1px solid black;
`;

export const HomeCharacterContainer = styled.div`
  height: 20rem;
  width: 90%;
  background-color: #f2f2f2;
  border-radius: 10px;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`;

export const NoMarginP = styled.p`
  margin: 0px;
  color: #65a884;
  font-weight: 600;
`;

export const NoMarginP2 = styled.p`
  margin: 2px;
  color: black;
  font-weight: 600;
  font-size: 10pt;
  padding-left: 3rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const HealthManagementContainer = styled.div`
  width: 90%;
  background-color: #f2f2f2;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const HealthManagementItemDiv = styled.div`
  width: 90%;
  background-color: #f9f9f9;
  border-radius: 15px;

  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;

export const InputBoxInput = styled.input`
  border: 0;
  background-color: transparent;
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
  border: 1px solid #dbdbdb;
  padding-left: 1rem;
  box-sizing: border-box;
`;
