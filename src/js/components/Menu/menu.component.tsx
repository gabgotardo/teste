import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useRecommendation } from "../../context/Recommendation";
import { useGlobal } from "../../hooks/useGlobal";
import {
  AllCategories,
  CloseMenuButton,
  MenuContainer,
  MenuDrawerIcon,
  MenuItem,
  MenuList,
} from "./menu.styles";

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Menu = () => {
  const { recommendationData } = useRecommendation();

  const mainCatalog = recommendationData?.mainCatalog || [];

  const { isMobile } = useGlobal();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const getFirstCategoryPart = () => {
    if (!mainCatalog || !mainCatalog.length) {
      return [];
    }

    const uniqueCategories = mainCatalog.reduce((categories, product: any) => {
      return categories.concat(product.categories);
    }, []);

    const firstCategoryParts = uniqueCategories
      .map(category => {
        const parts = category.split("/");
        if (parts.length >= 2) {
          return parts[1];
        }
        return null;
      })
      .filter(Boolean);
    2;
    return Array.from(new Set(firstCategoryParts));
  };

  const firstCategoryParts = getFirstCategoryPart();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <MenuContainer>
      <MenuDrawerIcon onClick={() => toggleMenu()}>
        <svg
          width="32"
          height="18"
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 0C0.447715 0 0 0.447715 0 0.999999C0 1.55228 0.447716 2 1 2H23C23.5523 2 24 1.55228 24 0.999999C24 0.447715 23.5523 0 23 0H1ZM0 9C0 8.44771 0.447715 8 1 8H31C31.5523 8 32 8.44771 32 9C32 9.55229 31.5523 10 31 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447714 16 0.999996 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H0.999996C0.447714 18 0 17.5523 0 17Z"
            fill="white"
          />
        </svg>
      </MenuDrawerIcon>
      {isMobile ? (
        <Fragment>
          <MenuList
            animate={menuIsOpen ? "open" : "closed"}
            variants={variants}
          >
            <AllCategories>
              Todas as categorias
              <CloseMenuButton onClick={() => toggleMenu()} />
            </AllCategories>
            {firstCategoryParts.map((category, index) => {
              const fixedLink = category.replace(/ /g, "-");
              return (
                <Link
                  to={`/_secure/recomendacao/category/${fixedLink}`}
                  key={index}
                >
                  <MenuItem>{category}</MenuItem>
                </Link>
              );
            })}
            <MenuItem>
              <Link to={`/_secure/recomendacao/category/elmex`}>
                <img src="/arquivos/elmex.png" />
              </Link>
            </MenuItem>
          </MenuList>
        </Fragment>
      ) : (
        <Fragment>
          <MenuList>
            <AllCategories>Todas as categorias </AllCategories>
            {firstCategoryParts.map((category, index) => {
              const fixedLink = category.replace(/ /g, "-");
              return (
                <Link
                  to={`/_secure/recomendacao/category/${fixedLink}`}
                  key={index}
                >
                  <MenuItem>{category}</MenuItem>
                </Link>
              );
            })}
            <MenuItem>
              <Link to={`/_secure/recomendacao/category/elmex`}>
                <img src="/arquivos/elmex_green-logo.png" />
              </Link>
            </MenuItem>
          </MenuList>
        </Fragment>
      )}
    </MenuContainer>
  );
};

export default Menu;
