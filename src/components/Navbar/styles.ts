import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px;
  justify-content: space-between; /* Distribuir espaço entre os elementos */
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 35px;
  font-family: "Inter", sans-serif;
  color: #6e6d7a;
  margin: 0; /* Remover a margem superior */
`;

export const Add = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 0px;
  margin-right: 20px;
`;
