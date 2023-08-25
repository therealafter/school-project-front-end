import { Container, Title } from "./styles"

interface IShowActivity {
  imgURL: string;
  teacher: string;
  matter: string;
  activity: string;
  date: string;
}

export const Content = (data: IShowActivity) => {
  return (
    <Container>
      <img src="./assets/ex.svg" alt="3C" />

      <div>
        <Title>Professor(a): {data.teacher}</Title>
        <Title>Matéria: {data.matter}</Title>
        <Title>Atividade: {data.activity} </Title>
        <Title>Data: {new Date(data.date).toLocaleDateString()} -
          {" "} {new Date(data.date).toLocaleTimeString()}
        </Title>
      </div>
    </Container>
  )
}