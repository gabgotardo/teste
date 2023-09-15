import React, { useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { Image, ImageWrapper, SkeletonImage } from "./product-image.styles";

const ProductImage = () => {
  const { selectedItem, loading } = useProduct();
  const [hovered, setHovered] = useState(false);

  if (loading) return <SkeletonImage variant="rectangular" />;

  const { images } = selectedItem;

  let displayedImage = images[0].imageUrl;
  if (hovered) {
    displayedImage = images[1].imageUrl;
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <ImageWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={displayedImage} />
    </ImageWrapper>
  );
};

export default ProductImage;
