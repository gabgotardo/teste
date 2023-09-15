import { Fragment, useEffect } from "react";
import { LeftSide, NotFoundWrapper, RightSide } from "./category-page.styles";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <NotFoundWrapper>
      <LeftSide>
        <h1>Oops!</h1>
        <span>Nenhum produto para ver aqui 😞 </span>
      </LeftSide>

      <RightSide>
        <span>O que eu posso fazer?</span>
        <ul>
          <li>Tente usar apenas uma palavra</li>
          <li>Verifique os termos digitados</li>
          <li>Use termos genericos na pesquisa</li>
          <li>Tente usar sinônimos do termo desejado</li>
        </ul>
      </RightSide>
    </NotFoundWrapper>
  );
};

export default NotFound;
