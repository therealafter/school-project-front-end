import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 390px;
    /* padding: 20px 20px 0px 20px; */
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SelectedButton = styled.button<{ selected: any }>`
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  font-family: "Inter", sans-serif;

  color: ${(props: any) => (props.selected ? "#FFF" : "#FFF")};
  background: ${(props: any) =>
    props.selected ? "#8656b8" : "rgba(134, 86, 184, 0.15)"};
  transition: background 0.2s ease; /* Adicionando transição */

border-radius: 10px;
  border: none;
`;

export const UnselectedButton = styled.button<{ selected: any }>`
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  font-family: "Inter", sans-serif;

  color: ${(props: any) => (props.selected ? "#FFF" : "#FFF")};

  background: ${(props: any) =>
    props.selected ? "#8656b8" : "rgba(134, 86, 184, 0.15)"}; /* Roxo escuro para selecionado */
  transition: background 0.2s ease; /* Adicionando transição */

  border: none;
`;