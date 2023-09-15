import { IProduct } from "../../typings/product";

export interface ISearchContext {
  searchData: ISearchData;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
}

export interface ISearchData {
  isOpen: boolean;
  term: string;
  filteredProducts: IProduct[];
  suggestedTerms: string[];
  topSearchTerms: string[];
}
