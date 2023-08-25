import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 35px;
  font-family: "Inter", sans-serif;
  color: #6e6d7a;
  margin: 0;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 9px;
  }
`;

export const Add = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 0;
  margin-right: 10px; /* Adicione um espaçamento à direita */

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
