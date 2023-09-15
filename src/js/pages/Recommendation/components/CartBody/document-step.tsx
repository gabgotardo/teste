import { useState } from "react";
import { useRecommendation } from "../../../../context/Recommendation";
import {
  BackToCartButton,
  CartBodyWrapper,
  Checkbox,
  Input,
  InputName,
  Label,
  NextButton,
  PolicyText,
  PolicyWrapper,
  StepContentWrapper,
  StepText,
} from "./cart-body.styles";

interface IDocumentStepProps {
  handleStepChange: (action: string) => void;
}

const DocumentStep = ({ handleStepChange }: IDocumentStepProps) => {
  const { userData, setUserData } = useRecommendation();
  const [checked, setChecked] = useState(false);
  const [document, setDocument] = useState("");

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length <= 11) {
      value = value.replace(
        /(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/,
        "$1.$2.$3-$4"
      );
    }

    e.target.value = value;

    setDocument(value);
  };

  const isNextButtonDisabled = !checked || document.length !== 14;

  return (
    <CartBodyWrapper>
      <BackToCartButton onClick={() => handleStepChange("previous")}>
        Voltar e revisar carrinho
      </BackToCartButton>

      <StepContentWrapper>
        <StepText>
          Informe pra gente seu <strong>CPF para prosseguir</strong>
        </StepText>

        <Label htmlFor="cpf">
          <InputName>CPF</InputName>
          <Input
            type="text"
            id="cpf"
            placeholder="___.___.___-__"
            required
            onChange={handleCpfChange}
          />
        </Label>

        <PolicyWrapper>
          <Checkbox
            className={checked ? "checked" : ""}
            onClick={() => setChecked(!checked)}
          />
          <PolicyText>
            Apenas o Dentista é responsável e a ele é incumbido o dever de
            instruir os pacientes sobre a inserção dos dados pessoais dos mesmos
            na plataforma VTEX, cuja finalidade é o envio de cestas de produtos
            personalizados. Autorizo a VTEX a realizar os disparos de e-mails de
            cestas de produtos personalizados em meu nome através da plataforma
            VTEX.
          </PolicyText>
        </PolicyWrapper>
      </StepContentWrapper>

      <NextButton
        disabled={isNextButtonDisabled}
        onClick={() => {
          handleStepChange("next");
          setUserData({ ...userData, dentistDocument: document });
        }}
      >
        Avançar
      </NextButton>
    </CartBodyWrapper>
  );
};

export default DocumentStep;
