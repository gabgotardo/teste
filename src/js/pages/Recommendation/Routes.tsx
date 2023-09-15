import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./components/CategoryPage/category-page.component";
import RecommendationHome from "./recommendation.component";

const router = createBrowserRouter([
  {
    path: "/_secure/recomendacao",
    element: <RecommendationHome />,
  },
  {
    path: "/_secure/recomendacao/busca/:searchTerm",
    element: <CategoryPage />,
  },
  {
    path: "/_secure/recomendacao/category/:categoryName",
    element: <CategoryPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
