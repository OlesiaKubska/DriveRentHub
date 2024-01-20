import { useState } from "react";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import Pagination from "../../components/Pagination/Pagination";
import { Section } from "../../components/Section/Section";
import { Container } from "./CatalogPage.styled";
import Header from "../../components/Header/Header";

const CatalogPage = () => {
 const [filters, setFilters] = useState({
  brand: "",
  price: { min: null, max: null },
  mileage: { min: null, max: null },
 });

 // Обробник для оновлення фільтрів
 const handleFilterChange = (newFilters) => {
  setFilters(newFilters);
 };

 const handleSearch = () => {
  // Логіка пошуку з використанням актуальних фільтрів...
 };
 return (
  <Section>
   <Header />
   <Container>
    <Filter onFilterChange={handleFilterChange} onSearch={handleSearch} />
    <CarList filters={filters} />
    <Pagination />
   </Container>
  </Section>
 );
};

export default CatalogPage;
