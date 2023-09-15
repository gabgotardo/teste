import { FC, Fragment } from "react";
import Shelf from "../../components/Shelf/shelf.component";
import MainLayout from "../../layouts/MainLayout";
import Accordion from "./components/Accordion/accordion.component";
import BannersList from "./components/BannersList/banners-list.component";
import BrandSection from "./components/BrandSection/brand-section.component";
import MainBanner from "./components/MainBanner/main-banner.component";
import { useRecommendation } from "../../context/Recommendation";
import Buybox from "../../components/BuyBox/buy-box.component";
import { IProduct } from "../../typings/product";

interface IRecommendationData {
  mostSearched: IProduct[];
  bestSellers: IProduct[];
}

const RecommendationHome: FC = () => {
  const { recommendationData } = useRecommendation();

  const mostSearched = recommendationData?.mostSearched || [];
  const bestSellers = recommendationData?.bestSellers || [];

  return (
    <MainLayout>
      <MainBanner />
      {bestSellers.length > 0 && (
        <Fragment>
          <Shelf products={mostSearched} title={"Mais Buscados"} />
          <Shelf products={bestSellers} title={"Mais Vendidos"} />
          <BannersList />
          <BrandSection />
          <Accordion />
        </Fragment>
      )}
      <Buybox />
    </MainLayout>
  );
};

export default RecommendationHome;
