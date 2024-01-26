import { useDispatch, useSelector } from "react-redux";
import {
 setBrand,
 setPrice,
 setMileage,
 updateFilters,
 resetFilters,
} from "../../redux/filtersSlice";
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
  const priceValue = event.target.value;
  dispatch(setPrice(priceValue));
 };

 const handleMileageChange = (event) => {
  const { name, value } = event.target;
  if (!isNaN(value) && value.trim() !== "") {
   dispatch(setMileage({ ...filters.mileage, [name]: value }));
  }
 };

 const priceOptions = [];
 for (let i = 10; i <= 500; i += 10) {
  priceOptions.push(i);
 }

 const handleSearchClick = () => {
  dispatch(updateFilters(filters));
 };

 const handleReset = () => {
  dispatch(resetFilters());
 };

 const handleSearch = (event) => {
  event.preventDefault();
  dispatch(updateFilters(filters));
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
      {priceOptions.map((price) => (
       <option key={price} value={price}>
        ${price}
       </option>
      ))}
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
    <Button type="button" onClick={handleSearchClick}>
     Search
    </Button>
    <Button type="button" onClick={handleReset}>
     Reset Filters
    </Button>
   </Form>
  </FormContainer>
 );
};

export default Filter;
