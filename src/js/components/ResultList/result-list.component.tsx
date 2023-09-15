import { useSearch } from "../../hooks/useSearch";
import { IProduct } from "../../typings/product";
import { formatPrice, getDefaultSeller } from "../../utils";
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  Name,
  Price,
  ResultListWrapper,
  Span,
  ResultListItem,
  ResultItem,
  ResultItemLink,
} from "./result-list.styles";

const ResultList = () => {
  const { term, filteredProducts } = useSearch();

  return (
    <ResultListWrapper>
      <Span>Produtos para {term}</Span>
      <ResultListItem>
        {filteredProducts?.map((product, index) => {
          const { productName } = product;
          const { images, sellers } = product.items[0];
          const defaultSeller = getDefaultSeller(sellers);

          const { Price: sellingPrice } = defaultSeller.commertialOffer;
          return (
            <ResultItemLink
              to={`/_secure/recomendacao/busca/${productName}`}
              key={index}
            >
              <ResultItem>
                <ImageWrapper>
                  <Image src={images[0].imageUrl} />
                </ImageWrapper>
                <InfoWrapper>
                  <Name>{productName}</Name>
                  <Price>{formatPrice(sellingPrice)}</Price>
                </InfoWrapper>
              </ResultItem>
            </ResultItemLink>
          );
        })}
      </ResultListItem>
    </ResultListWrapper>
  );
};

export default ResultList;
