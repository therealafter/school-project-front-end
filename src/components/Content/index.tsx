import { Container, DeadlineButton, Title } from "./styles"

interface IShowActivity {
  imgURL: string;
  teacher: string;
  matter: string;
  activity: string;
  date: string;
  deadline?: any;
}

export const Content = (data: IShowActivity) => {
  return (
    <Container>
      <img src={data?.imgURL} alt="3C" width="350px" height="350px" />

      <div>
        <br />
        <Title>
          Professor(a): <span>{data.teacher}</span>
        </Title>
        <Title>
          Matéria: <span>{data.matter}</span>
        </Title>
        <Title>
          Atividade: <span>{data.activity}</span>
        </Title>
        <Title>
          Data de postagem:{" "}
          <span>
            {new Date(data.date).toLocaleDateString()} -{" "}
            {new Date(data.date).toLocaleTimeString()}
          </span>
        </Title>

        {data.deadline !== null || "1970-01-01T00:00:00.000Z" && (
          <DeadlineButton isLate={new Date(data?.deadline) < new Date()}>
            {new Date(data?.deadline) < new Date() ? "Atrasado" : "Entregar até"} {new Date(data?.deadline).toLocaleDateString()}
          </DeadlineButton>
        )}

      </div>
    </Container>
  )
}