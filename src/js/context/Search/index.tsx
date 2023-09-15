import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { ISearchContext, ISearchData } from "./interface";
import { IProduct } from "../../typings/product";

interface Props {
  children: ReactNode;
}

const SearchContext = createContext<Partial<ISearchContext>>(
  {} as ISearchContext
);

const initalState = {
  filteredProducts: [],
  suggestedTerms: [],
  term: "",
  isOpen: false,
  topSearchTerms: [],
};

const SearchContextProvider: FC<Props> = ({ children }) => {
  const [searchData, setSearchData] = useState<ISearchData>(initalState);

  const topSearchTerms =
    document
      .querySelector(".top-search")
      .textContent.replace("\n", "")
      .split(",") ?? [];

  useEffect(() => {
    setSearchData({
      ...initalState,
      topSearchTerms,
    });
  }, []);

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
