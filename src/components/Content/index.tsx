import { Container, DeadlineButton, ImageWrapper, Title } from "./styles"

interface IShowActivity {
  imgURL: string;
  teacher: string;
  matter: string;
  activity: string;
  date: string;
  deadline?: any;
}

export const Content = (data: IShowActivity) => {
  const downloadFile = () => {
    // download by url
    window.open(data?.imgURL, "_blank");
  }

  return (
    <Container>
      {data?.imgURL && (
        <ImageWrapper>
          {data?.imgURL.endsWith(".pdf" || ".doc" || ".pptx" || ".docx") ? (
            <iframe src={data?.imgURL} />
          ) : (
            <img src={data?.imgURL} alt="3C" />
          )}
        </ImageWrapper>
      )}

      <div>
        <button onClick={downloadFile}>Visualizar</button>
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

        {data.deadline !== "1970-01-01T00:00:00.000Z" && (
          <>
            <DeadlineButton isLate={new Date(data?.deadline) < new Date()}>
              {new Date(data?.deadline) < new Date() ? "Atrasado" : "Entregar até"} {new Date(data?.deadline).toLocaleDateString()}
            </DeadlineButton>
          </>
        )}

      </div>
    </Container>
  )
}