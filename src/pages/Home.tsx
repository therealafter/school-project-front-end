import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Content />
      <Content />
      <Content />
      <Content />
    </Container>
  )
}