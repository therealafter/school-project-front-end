import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #e5e4e2;
  padding: 5px;

  img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adicionar uma sombra suave */

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-weight: 500;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  background-color: #e5e4e2;
  padding: 10px; /* Aumentar um pouco o espaço interno */
  border-radius: 20px; /* Deixar as bordas mais arredondadas */

  &:focus {
    outline: none;
  }
`;
