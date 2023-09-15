import React, { useState } from "react";
import { useRecommendation } from "../../../../context/Recommendation";
import {
  BackToCartButton,
  CartBodyWrapper,
  Input,
  InputName,
  Label,
  NextButton,
  StepContentWrapper,
  StepText,
} from "./cart-body.styles";

interface INameStepProps {
  handleStepChange: (action: string) => void;
}

const NameStep = ({ handleStepChange }: INameStepProps) => {
  const { userData, setUserData, sendRecommendedProducts } =
    useRecommendation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setIsEmailValid(isValid);
  };

  const isNextButtonDisabled = !name || !email || !isEmailValid;

  const sendData = async () => {
    setIsLoading(true);
    const userDataUpdated = {
      ...userData,
      patientName: name,
      patientEmail: email,
    };

    setUserData(userDataUpdated);

    const success = await sendRecommendedProducts(userDataUpdated);

    if (success) {
      handleStepChange("next");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      alert("Alguma coisa deu errada :( Tente novamente!");
    }
  };

  return (
    <CartBodyWrapper>
      <BackToCartButton onClick={() => handleStepChange("previous")}>
        Voltar e revisar carrinho
      </BackToCartButton>

      <StepContentWrapper>
        <StepText>
          Conta pra gente quem irá <strong>receber a cesta?</strong>
        </StepText>

        <Label htmlFor="name">
          <InputName>Nome</InputName>
          <Input
            type="text"
            id="name"
            placeholder="Nome Completo"
            required
            value={name}
            onChange={handleNameChange}
          />
        </Label>

        <Label htmlFor="email">
          <InputName>Email</InputName>
          <Input
            type="text"
            id="email"
            placeholder="exemplo@email.com"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </Label>
      </StepContentWrapper>

      <NextButton
        disabled={isNextButtonDisabled}
        onClick={() => sendData()}
        className={isLoading ? "loading" : ""}
      >
        Enviar
      </NextButton>
    </CartBodyWrapper>
  );
};

export default NameStep;
