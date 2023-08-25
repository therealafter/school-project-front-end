import { Container, SelectedButton, UnselectedButton } from "./styles";

import { useState } from "react";

export const Header = () => {
  const [selectedButton, setSelectedButton] = useState("activities");

  function handleSelectedButton(button: string) {
    setSelectedButton(button);
  }

  return (
    <Container>
      <SelectedButton
        onClick={() => handleSelectedButton("activities")}
        selected={selectedButton === "activities"}
      >
        Atividades
      </SelectedButton>
      <UnselectedButton
        onClick={() => handleSelectedButton("jobs")}
        selected={selectedButton === "jobs"}
      >
        Trabalhos
      </UnselectedButton>
    </Container>
  )
}