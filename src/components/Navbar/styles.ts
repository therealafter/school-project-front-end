import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelect = styled.select`
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: #e5e4e2;
  font-weight: 500;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  width: 100%;

  &:focus {
    outline: none;
    color: #000;
  }

  option:hover {
    background-color: #6a0dad;
    color: #fff; /* Cor do texto ao passar o mouse */
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 20px;
  border: none;
  border-radius: 5px;

  color: #FFF;

  font-weight: 500;
  font-size: 16px;
  font-family: "Inter", sans-serif;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="file"] {
    padding: 8px;
    margin-bottom: 10px;
    border: none;
    border-radius: 8px;
    color: #000;
    background-color: #e5e4e2;
    font-weight: 500;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    width: 100%;

    :focus {
      outline: none;
      color: #000;
    }
  }

  input[type="text"] {
    padding: 8px;
    margin-bottom: 10px;
    border: none;
    border-radius: 8px;
    background-color: #e5e4e2;
    font-weight: 500;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    width: 100%;

    :focus {
      outline: none;
      color: #000;
    }
  }


  button {
    background-color: #8656b8;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    font-size: medium;
  font-style: normal;
  font-family: "Inter", sans-serif;

    &:hover {
      background-color: rgba(134, 86, 184, 0.15);
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  font-family: "Inter", sans-serif;
  color: #6e6d7a;
  margin: 0;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 9px;
  }
`;

export const Add = styled.button`
  margin-top: 0;
  margin: 0;

  background: transparent;
  border: none;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
