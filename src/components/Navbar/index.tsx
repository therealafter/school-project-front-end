import { SearchComponent } from "../Search"
import { Container, Add, Title } from "./styles"

export const Navbar = () => {
  return (
    <Container>
      <Title>3C</Title>
      <SearchComponent />
      <Add><img src="/assets/add.svg" alt="Add" /></Add>
    </Container>
  )
}