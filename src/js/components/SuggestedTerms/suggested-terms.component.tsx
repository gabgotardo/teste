import { useSearch } from "../../hooks/useSearch";
import {
  Span,
  SuggestedTermsItem,
  SuggestedTermsList,
  SuggestedTermsWrapper,
  TermLink,
} from "./suggested-terms.styles";

const SuggestedTerms = () => {
  const { suggestedTerms, setSearchData, searchData } = useSearch();

  const handleSelect = (term: string) => {
    setSearchData({
      ...searchData,
      term,
    });
  };

  return (
    <SuggestedTermsWrapper>
      <Span>Termos Sugeridos</Span>
      <SuggestedTermsList>
        {suggestedTerms &&
          suggestedTerms.slice(0, 3).map((term: string, index: number) => (
            <SuggestedTermsItem key={index} onClick={() => handleSelect(term)}>
              <TermLink to={`/_secure/recomendacao/busca/${term}`}>
                {term}
              </TermLink>
            </SuggestedTermsItem>
          ))}
      </SuggestedTermsList>
    </SuggestedTermsWrapper>
  );
};

export default SuggestedTerms;
