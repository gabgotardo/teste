import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { useRecommendation } from "../../context/Recommendation";
import {
  Input,
  Overlay,
  SearchBarWrapper,
  SearchIcon,
} from "./search-bar.styles";
import { suggestTerms } from "../../utils";
import { useSearch } from "../../hooks/useSearch";
import SearchResult from "../SearchResult/search-result.component";

const SearchBar = () => {
  const navigate = useNavigate();
  const { recommendationData } = useRecommendation();

  const mainCatalog = recommendationData?.mainCatalog || [];

  const { searchData, setSearchData, isOpen } = useSearch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    globalState: { page },
  } = useGlobal();

  const handleSearch = (evt: any) => {
    if (evt.key === "Enter") {
      navigate(`/_secure/recomendacao/busca/${searchTerm}`);
    }

    const newSearchTerm = evt.target.value.toLowerCase();

    if (page === "store-recommendation") {
      const filteredProducts = mainCatalog.filter(product =>
        product.productName.toLowerCase().includes(newSearchTerm)
      );

      const suggestedTerms = suggestTerms(newSearchTerm, filteredProducts);

      setSearchData({
        ...searchData,
        filteredProducts,
        suggestedTerms,
        term: newSearchTerm,
      });
    }
  };

  const handleSearchIconClick = () => {
    navigate(`/_secure/recomendacao/busca/${searchTerm}`);
  };

  const handleOpen = () => {
    setSearchData({ ...searchData, isOpen: true });
  };

  const handleChange = (evt: any) => {
    setSearchTerm(evt.target.value);
  };

  useEffect(() => {
    setSearchTerm(searchData.term);
  }, [searchData.term]);

  return (
    <Fragment>
      <SearchBarWrapper>
        <Input
          type="text"
          value={searchTerm}
          placeholder="Encontrar produtos"
          onKeyUp={evt => handleSearch(evt)}
          onClick={handleOpen}
          onChange={handleChange}
        />
        <SearchIcon onClick={handleSearchIconClick} />
        <SearchResult />
      </SearchBarWrapper>
      {isOpen && <Overlay />}
    </Fragment>
  );
};

export default SearchBar;
