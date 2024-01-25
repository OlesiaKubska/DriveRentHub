import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Wrapper } from "./App.styled";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const App = () => {
 return (
  <Wrapper>
   <Suspense fallback={<Loader />}>
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/catalog" element={<CatalogPage />} />
     <Route path="/favorites" element={<FavoritesPage />} />
     <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
   </Suspense>
  </Wrapper>
 );
};

export default App;
