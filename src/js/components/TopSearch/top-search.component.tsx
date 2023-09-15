import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import {
  Position,
  Span,
  Term,
  TopSearchItem,
  TopSearchList,
  TopSearchWrapper,
} from "./top-search.styles";

const TopSearch = () => {
  const { topSearchTerms, setSearchData, searchData } = useSearch();

  return (
    <TopSearchWrapper>
      <Span>Termos mais buscados</Span>
      <TopSearchList>
        {topSearchTerms &&
          topSearchTerms.map((term: string, index: number) => (
            <TopSearchItem key={index}>
              <Link to={`/_secure/recomendacao/busca/${term}`}>
                <Position>{index + 1}</Position>
                <Term>{term}</Term>
              </Link>
            </TopSearchItem>
          ))}
      </TopSearchList>
    </TopSearchWrapper>
  );
};

export default TopSearch;
