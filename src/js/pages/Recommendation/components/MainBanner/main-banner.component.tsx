import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Steps from "../Steps/steps.component";

//styles
import { Banner, Container } from "./main-banner.styles";

const MainBanner = () => {
  const [banner, setBanner] = useState("");

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    const bannerDesktop = document.querySelector(
      ".main-banner-desktop img"
    ) as HTMLImageElement;

    const bannerMobile = document.querySelector(
      ".main-banner-mobile img"
    ) as HTMLImageElement;

    if (isMobile) {
      setBanner(bannerMobile.src);
    } else {
      setBanner(bannerDesktop.src);
    }
  }, [isMobile]);

  return (
    <Container>
      <Banner src={banner} alt={"banner recomendação"} />
      <Steps />
    </Container>
  );
};

export default MainBanner;
