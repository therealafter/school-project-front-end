import { SearchContainer, SearchInput } from "./styles"

export const SearchComponent = () => {
  return (
    <SearchContainer>
      <img src="/assets/search.svg" alt="Search" />
      <SearchInput type="text" placeholder={`Tente “Matemática”`} />
    </SearchContainer>
  )
}