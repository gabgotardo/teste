import { useEffect, useState } from "react";
import { Span, Tap, TopbarWrapper } from "./topbar.styles";

const Topbar = () => {
  const [orderForm, setOrderForm] = useState(null);

  useEffect(() => {
    // @ts-ignore
    vtexjs.checkout.getOrderForm().done(orderForm => {
      setOrderForm(orderForm);
    });
  }, []);

  if (!orderForm) return null;

  const { clientProfileData, loggedIn } = orderForm;
  const { firstName, lastName } = clientProfileData;

  return (
    <TopbarWrapper>
      <Span>
        {loggedIn ? (
          <>
            Olá, {firstName} {lastName}. <strong>Você está aqui </strong>
          </>
        ) : (
          <>
            Olá! <strong>Você está aqui</strong>
          </>
        )}
      </Span>

      <Tap className="active">Colgate Pro Recomendação</Tap>
      <Tap>Colgate Pro Consultório</Tap>
    </TopbarWrapper>
  );
};

export default Topbar;
