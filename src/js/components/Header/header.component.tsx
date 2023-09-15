import Logo from "../Logo/logo.component";
import { HeaderContent, HeaderWrapper, Middle } from "./header.styles";
import Topbar from "../Topbar/topbar.component";
import SearchBar from "../SearchBar/search-bar.component";
import { SearchContextProvider } from "../../context/Search";
import Cart from "../../pages/Recommendation/components/Cart/cart.component";
import Buybox from "../BuyBox/buy-box.component";
import MyAccount from "../MyAccount/my-account.component";
import Menu from "../Menu/menu.component";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Topbar />
        <Middle>
          <Logo />
          <SearchContextProvider>
            <SearchBar />
          </SearchContextProvider>
          <MyAccount />
          <Cart />
        </Middle>
        <Menu />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
