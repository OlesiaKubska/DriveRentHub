import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/filtersSlice";
import { getFilteredAdverts } from "../../redux/selectors";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import { Section } from "../../components/Section/Section";
import { Container } from "./CatalogPage.styled";
import Header from "../../components/Header/Header";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const CatalogPage = () => {
 const dispatch = useDispatch();
 const filters = useSelector(getFilteredAdverts);

 const handleFilterChange = (newFilters) => {
  dispatch(updateFilters(newFilters));
 };

 const handleSearch = () => {};

 return (
  <Section>
   <Header />
   <ScrollTop />
   <Container>
    <Filter onFilterChange={handleFilterChange} onSearch={handleSearch} />
    <CarList filters={filters} />
   </Container>
  </Section>
 );
};

export default CatalogPage;
