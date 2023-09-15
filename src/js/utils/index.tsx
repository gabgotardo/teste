import { IProduct, ISeller } from "../typings/product";

const formatPrice = (price: number) => {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

const suggestTerms = (searchTerm: string, products: IProduct[]) => {
  searchTerm = searchTerm.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm)
  );

  const suggestedTerms = filteredProducts.map(product => {
    const words = product.productName.split(" ");
    if (words.length >= 2) {
      return `${words[0]} ${words[1]}`;
    }
    return words[0];
  });

  const uniqueSuggestedTerms = Array.from(new Set(suggestedTerms));

  uniqueSuggestedTerms.sort((a, b) => {
    const indexA = a.toLowerCase().indexOf(searchTerm);
    const indexB = b.toLowerCase().indexOf(searchTerm);
    return indexA - indexB;
  });

  const maxSuggestions = 10;
  const limitedSuggestions = uniqueSuggestedTerms.slice(0, maxSuggestions);

  return limitedSuggestions;
};

const getDefaultSeller = (sellers: ISeller[]) => {
  const defaultSeller = sellers.find(seller => seller.sellerDefault);
  return defaultSeller;
};

export { formatPrice, suggestTerms, getDefaultSeller };
