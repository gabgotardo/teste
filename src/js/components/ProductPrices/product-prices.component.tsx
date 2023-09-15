import { Fragment } from "react";
import { useProduct } from "../../hooks/useProduct";
import { ICommertialOffer, ISeller } from "../../typings/product";
import { formatPrice } from "../../utils";
import {
  OldPrice,
  PriceWrapper,
  Price,
  Installments,
  SkeletonPrice,
  SkeletonInstallments,
} from "./product-prices.styles";

const ProductPrices = () => {
  const { loading, selectedItem } = useProduct();

  if (loading)
    return (
      <Fragment>
        <SkeletonPrice
          variant="text"
          sx={{ fontSize: "1.25rem" }}
          animation="wave"
        />
        <SkeletonInstallments
          variant="text"
          sx={{ fontSize: "0.875rem" }}
          animation="wave"
        />
      </Fragment>
    );

  const defaultSeller = selectedItem.sellers.find(
    (seller: ISeller) => seller.sellerDefault
  );

  const {
    ListPrice,
    Price: sellingPrice,
    Installments: installments,
  } = defaultSeller.commertialOffer as ICommertialOffer;

  const hasDiscount = ListPrice > sellingPrice;

  const maxInstallmentsOption = installments.reduce(
    (maxOption, currentOption) => {
      if (currentOption.NumberOfInstallments > maxOption.NumberOfInstallments) {
        return currentOption;
      }
      return maxOption;
    },
    { NumberOfInstallments: 0 }
  );

  const { NumberOfInstallments } = maxInstallmentsOption;

  return (
    <Fragment>
      <PriceWrapper>
        {hasDiscount && <OldPrice>{ListPrice}</OldPrice>}
        <Price>{formatPrice(sellingPrice)}</Price>
      </PriceWrapper>
      {NumberOfInstallments > 0 && (
        <Installments>
          Parcele em até <strong>{NumberOfInstallments}x sem juros</strong>
        </Installments>
      )}
    </Fragment>
  );
};

export default ProductPrices;
