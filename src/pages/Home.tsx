import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Content
        imgURL="./assets/ex.svg"
        teacher="João"
        matter="Matemática"
        activity="Matemática"
        date="2021-10-10"
      />
      <Content
        imgURL="./assets/ex.svg"
        teacher="João"
        matter="Matemática"
        activity="Matemática"
        date="2021-10-10"
      />
      <Content
        imgURL="./assets/ex.svg"
        teacher="João"
        matter="Matemática"
        activity="Matemática"
        date="2021-10-10"
      />
      <Content
        imgURL="./assets/ex.svg"
        teacher="João"
        matter="Matemática"
        activity="Matemática"
        date="2021-10-10"
      />
    </Container>
  )
}