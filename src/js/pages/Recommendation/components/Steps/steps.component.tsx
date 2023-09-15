import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//component styles
import { Step, StepsContainer } from "./steps.styles";

const Steps = () => {
  const [stepsContent, setStepsContent] = useState([]);

  const swiperParams = {
    modules: [FreeMode, Pagination, Autoplay],
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };

  useEffect(() => {
    const steps = [...document.querySelectorAll(".recommendation-steps .step")];
    const content = steps.map(step => step.innerHTML);
    setStepsContent(content);
  }, []);

  return (
    <StepsContainer>
      <Swiper {...swiperParams}>
        {stepsContent.map((content, index) => (
          <SwiperSlide key={index}>
            <Step dangerouslySetInnerHTML={{ __html: content }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StepsContainer>
  );
};

export default Steps;
