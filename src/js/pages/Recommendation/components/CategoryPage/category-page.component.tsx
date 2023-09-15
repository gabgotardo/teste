import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Importe o useLocation
import ProductCard from "../../../../components/ProductCard/product-card.component";
import { ProductContextProvider } from "../../../../context/Product";
import { useRecommendation } from "../../../../context/Recommendation";
import MainLayout from "../../../../layouts/MainLayout";
import { IProduct, IProductItem } from "../../../../typings/product";
import {
  CategoryPageContainer,
  CategoryPageTitle,
} from "./category-page.styles";
import NotFound from "./not-found";

const CategoryPage = () => {
  const [title, setTitle] = useState("");
  const { recommendationData } = useRecommendation();
  const location = useLocation();

  const term = decodeURIComponent(
    location.pathname.split("/")[4].toLowerCase().replace(/-/g, " ")
  );

  let filteredProducts: IProduct[];

  if (location.pathname.includes("category")) {
    filteredProducts = recommendationData.mainCatalog.filter(
      (product: IProduct) => {
        return product.categories.some(category =>
          category.toLowerCase().includes(term)
        );
      }
    );
  } else {
    filteredProducts = recommendationData.mainCatalog.filter(product => {
      return product.productName.toLowerCase().includes(term);
    });
  }

  useEffect(() => {
    const title = term.charAt(0).toUpperCase() + term.slice(1);
    setTitle(title);

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MainLayout>
      {filteredProducts.length === 0 ? (
        <NotFound />
      ) : (
        <Fragment>
          <CategoryPageTitle>{title}</CategoryPageTitle>
          <CategoryPageContainer>
            {filteredProducts.map(product => {
              const selectedItem: IProductItem = product.items[0];

              return (
                <ProductContextProvider
                  initialState={{ product, selectedItem, loading: false }}
                >
                  <ProductCard />
                </ProductContextProvider>
              );
            })}
          </CategoryPageContainer>
        </Fragment>
      )}
    </MainLayout>
  );
};

export default CategoryPage;
