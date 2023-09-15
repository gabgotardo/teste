import { Fragment, ReactNode } from "react";
import Breadcrumb from "../components/Breadcrumb/breadcrumb.component";
import Header from "../components/Header/header.component";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <Breadcrumb />
      {children}
    </Fragment>
  );
};

export default MainLayout;
