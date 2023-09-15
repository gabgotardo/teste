import { useProduct } from "../../hooks/useProduct";
import { Name, SkeletonName } from "./product-name.styles";

const ProductName = () => {
  const { selectedItem, loading } = useProduct();

  if (loading) return <SkeletonName variant="text" />;

  const { name } = selectedItem;

  return <Name>{name}</Name>;
};

export default ProductName;
