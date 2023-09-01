import styled from "styled-components";

export const Container = styled.div`
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
        margin-top: 4px; /* Alteração feita aqui */
        margin-bottom: 8px; /* Adicionado para garantir um espaçamento entre o botão e o conteúdo acima */
        padding: 5px 10px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        color: #FFF;
        cursor: pointer;
        background-color: #3D246C;
    }
`;

export const ImageWrapper = styled.div`
  border: 2px solid #3D246C;
  border-radius: 10px;
  padding: 5px;
  display: inline-block;

  img {
    width: 350px;
    height: 350px;
    border-radius: 25px;
  }

  iframe {
    width: 350px;
    height: 350px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  color: #FFF;
  margin: 0;

  span {
    color: #512B81; /* Cor roxa */
  }
`;

export const DeadlineButton = styled.button<{ isLate: boolean }>`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  color: #FFF;
  cursor: pointer;
  background-color: ${props => props.isLate ? '#FF5733' : '#8656B8'};
`;
