import styled from "styled-components";

//  container with space in the top
export const TeacherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 10px;
  padding: 10px;
  flex: 1 0 0;
`;

export const ActuallyTime = styled.button`
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  font-family: "Inter", sans-serif;

  color: #FFF;
  background: rgba(134, 86, 184, 0.15);
  transition: background 0.2s ease; /* Adicionando transição */

    border-radius: 10px;
    border: none;

    button:hover {
      background: rgba(134, 86, 184, 0.15);
    }

`;

export const ActuallyTeacher = styled.button`

  
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  font-family: "Inter", sans-serif;

  color: #FFF;
  background: #8656b8;
  transition: background 0.2s ease; /* Adicionando transição */

    border-radius: 10px;
    border: none;

    button:hover {
      background: rgba(134, 86, 184, 0.15);
    }

`;