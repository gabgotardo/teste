import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import EmptyCart from "./cart-empty";
import FullCart from "./full-cart";
import { useRecommendation } from "../../../../context/Recommendation";
import { useEffect, useRef, useState } from "react";
import DocumentStep from "./document-step";
import NameStep from "./name-step";
import SuccessStep from "./success-step";
import { useGlobal } from "../../../../hooks/useGlobal";

enum StepActions {
  NEXT = "next",
  PREVIOUS = "previous",
  RESTART = "restart",
  SHARE_AGAIN = "share-again",
}

const CartBody = () => {
  const { isEmpty } = useRecommendation();

  const swiperRef = useRef(null);

  const handleStepChange = (action: string) => {
    if (swiperRef.current) {
      switch (action) {
        case StepActions.NEXT:
          swiperRef.current.slideNext();
          break;
        case StepActions.PREVIOUS:
          swiperRef.current.slidePrev();
          break;
        case StepActions.RESTART:
          swiperRef.current.slideTo(0);
          break;
        case StepActions.SHARE_AGAIN:
          swiperRef.current.slideTo(1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Swiper ref={swiperRef} onSwiper={swiper => (swiperRef.current = swiper)}>
      <SwiperSlide>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <FullCart handleStepChange={handleStepChange} />
        )}
      </SwiperSlide>
      <SwiperSlide>
        <DocumentStep handleStepChange={handleStepChange} />
      </SwiperSlide>

      <SwiperSlide>
        <NameStep handleStepChange={handleStepChange} />
      </SwiperSlide>

      <SwiperSlide>
        <SuccessStep handleStepChange={handleStepChange} />
      </SwiperSlide>
    </Swiper>
  );
};

export default CartBody;
