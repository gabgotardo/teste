import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Banner, BannersListWrapper } from "./banners-list.styles";

const BannersList = () => {
  const [banners, setBanners] = useState<string[]>([]);

  const swiperParams = {
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  useEffect(() => {
    const banners = [...document.querySelectorAll(".banners-list img")].map(
      (banner: HTMLImageElement) => banner.src
    );

    setBanners(banners);
  }, []);

  if (!banners.length) return null;
  return (
    <BannersListWrapper>
      <Swiper {...swiperParams}>
        {banners.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <Banner src={banner} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BannersListWrapper>
  );
};

export default BannersList;
