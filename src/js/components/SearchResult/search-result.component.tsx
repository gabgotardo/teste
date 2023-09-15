import { Fragment, useEffect } from "react";
import { useSearch } from "../../hooks/useSearch";
import ResultList from "../ResultList/result-list.component";
import SuggestedTerms from "../SuggestedTerms/suggested-terms.component";
import TopSearch from "../TopSearch/top-search.component";
import { ResultContainer, ResultWrapper } from "./search-result.styles";

const variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const SearchResult = () => {
  const { filteredProducts, isOpen, searchData, setSearchData } = useSearch();

  useEffect(() => {
    const handleClickOutside = event => {
      if (isOpen && !event.target.closest(".SearchBarWrapper")) {
        setSearchData({ ...searchData, isOpen: false });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setSearchData]);
  return (
    <ResultContainer animate={isOpen ? "open" : "closed"} variants={variants}>
      {filteredProducts?.length > 0 ? (
        <ResultWrapper>
          <SuggestedTerms />
          <ResultList />
        </ResultWrapper>
      ) : (
        <TopSearch />
      )}
    </ResultContainer>
  );
};

export default SearchResult;
