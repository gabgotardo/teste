import { useEffect, useState } from "react";
import Shelf from "../../../../components/Shelf/shelf.component";
import { useRecommendation } from "../../../../context/Recommendation";
import {
  BrandBanner,
  BrandSectionWrapper,
  BrandTitle,
  FlexLayoutRow,
} from "./brand-section.styles";

interface IBrandData {
  bannerSrc: string;
  brandName: string;
}

const BrandSection = () => {
  const [brandData, setBrandData] = useState<IBrandData>();
  const { recommendationData } = useRecommendation();

  const { elmexCollection } = recommendationData;

  useEffect(() => {
    const banner = document.querySelector(
      ".brand-content img"
    ) as HTMLImageElement;
    const brandName = document.querySelector(
      ".brand-content"
    ) as HTMLDivElement;

    if (banner && brandName) {
      setBrandData({
        bannerSrc: banner.src,
        brandName: brandName.textContent || "",
      });
    }
  }, []);

  if (!brandData) return null;
  return (
    <BrandSectionWrapper>
      <BrandTitle>{brandData.brandName}</BrandTitle>
      <FlexLayoutRow>
        <BrandBanner src={brandData.bannerSrc} />
        <Shelf products={elmexCollection} slidesPerView={2} />
      </FlexLayoutRow>
    </BrandSectionWrapper>
  );
};

export default BrandSection;
