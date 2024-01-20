import { useDispatch, useSelector } from "react-redux";
import {
 setBrand,
 setPrice,
 setMileage,
 updateFilters,
} from "../../redux/filtersSlice";
// import { getFilteredAdverts } from "../../redux/selectors";
import PropTypes from "prop-types";
import brands from "../../makes.json";
import {
 FormContainer,
 Form,
 Label,
 SelectBrand,
 Button,
 InputFrom,
 InputTo,
 SelectPrice,
} from "./Filter.styled";

const Filter = () => {
 const dispatch = useDispatch();
 const filters = useSelector((state) => state.filters);

 const handleBrandChange = (event) => {
  dispatch(setBrand(event.target.value));
 };

 const handlePriceChange = (event) => {
  dispatch(setPrice(event.target.value));
 };

 const handleMileageChange = (event) => {
  const { name, value } = event.target;
  dispatch(
   setMileage({ ...filters.mileage, [name]: value.replace(/\D/g, "") })
  );
 };

 const handleSearch = (event) => {
  event.preventDefault();
  dispatch(updateFilters(filters));
  // Тут можна виконати додаткову логіку, якщо потрібно
 };

 return (
  <FormContainer>
   <Form onSubmit={handleSearch}>
    <div>
     <Label>Car brand</Label>
     <SelectBrand value={filters.brand} onChange={handleBrandChange}>
      <option value="">Enter the text</option>
      {brands.map((brand) => (
       <option key={brand} value={brand}>
        {brand}
       </option>
      ))}
     </SelectBrand>
    </div>
    <div>
     <Label>Price/ 1 hour</Label>
     <SelectPrice value={filters.price} onChange={handlePriceChange}>
      <option value="">To $</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
      <option value="60">60</option>
      <option value="70">70</option>
      <option value="80">80</option>
     </SelectPrice>
    </div>
    <div>
     <Label>Car mileage / km</Label>
     <InputFrom
      type="text"
      name="from"
      value={filters.mileage.min}
      onChange={handleMileageChange}
      placeholder="From"
     />
     <InputTo
      type="text"
      name="to"
      value={filters.mileage.max}
      onChange={handleMileageChange}
      placeholder="To"
     />
    </div>
    <Button type="submit">Search</Button>
   </Form>
  </FormContainer>
 );
};

Filter.propTypes = {
 onFilterChange: PropTypes.func.isRequired,
 onSearch: PropTypes.func.isRequired,
};

export default Filter;
