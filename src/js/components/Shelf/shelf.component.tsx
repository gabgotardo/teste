import React, { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { ShelfTitle, ShelfWrapper } from "./shelf.styles";
import { IProduct, IProductItem } from "../../typings/product";
import ProductCard from "../ProductCard/product-card.component";
import { ProductContextProvider } from "../../context/Product";

interface IShelf {
  products: IProduct[];
  title?: string;
  slidesPerView?: number;
}

const Shelf: FC<IShelf> = ({ products, title, slidesPerView = 5 }) => {
  const swiperParams = {
    modules: [Pagination, Navigation],
    navigation: true,
    freeMode: slidesPerView === 2,
    breakpoints: {
      320: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      640: { slidesPerView: 4 },
      768: { slidesPerView: slidesPerView, spaceBetween: 24 },
    },
    ...(slidesPerView > 2 && {
      pagination: { clickable: true },
    }),
  };

  return (
    <ShelfWrapper
      className={slidesPerView === 2 ? "twice-mode" : "normal-mode"}
    >
      {title && <ShelfTitle>{title}</ShelfTitle>}

      <Swiper {...swiperParams}>
        {products.map((product: IProduct, index) => {
          const selectedItem: IProductItem = product.items[0];
          return (
            <SwiperSlide key={index}>
              <ProductContextProvider
                initialState={{ product, selectedItem, loading: false }}
              >
                <ProductCard />
              </ProductContextProvider>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ShelfWrapper>
  );
};

export default Shelf;
