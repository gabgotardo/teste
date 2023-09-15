import { useContext } from "react";
import { SearchContext } from "../context/Search";

export const useSearch = () => {
  const { searchData, setSearchData } = useContext(SearchContext);

  const { suggestedTerms, filteredProducts, isOpen, topSearchTerms, term } =
    searchData;

  return {
    searchData,
    setSearchData,
    suggestedTerms,
    filteredProducts,
    topSearchTerms,
    isOpen,
    term,
  };
};
