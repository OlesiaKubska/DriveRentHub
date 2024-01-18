import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Wrapper } from "./App.styled";

const App = () => {
 return (
  <Wrapper>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
   </Routes>
  </Wrapper>
 );
};

export default App;
