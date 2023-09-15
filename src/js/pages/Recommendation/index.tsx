import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "../../../styles/global";
import { GlobalContextProvider } from "../../context/Global";
import { RecommendationContextProvider } from "../../context/Recommendation";
import Content from "./recommendation.component";
import Routes from "./Routes";

const elementContainer: HTMLDivElement =
  document.querySelector("#recommendation");

if (elementContainer) {
  ReactDOM.render(
    <StrictMode>
      <GlobalContextProvider>
        <RecommendationContextProvider>
          <Routes />
          <GlobalStyles />
        </RecommendationContextProvider>
      </GlobalContextProvider>
    </StrictMode>,
    elementContainer
  );
}
