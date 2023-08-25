import styled from "styled-components";

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-weight: 500;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  background-color: #e5e4e2;
  padding: 10px;
  border-radius: 20px;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    width: 180px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #e5e4e2;
  padding: 5px;

  /* img {
    margin-left: 10px;
  } */

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;