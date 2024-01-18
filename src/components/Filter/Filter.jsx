import { useState } from "react";
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

const Filter = ({ onSearch, onFilterChange }) => {
 const [selectedPrice, setSelectedPrice] = useState("");
 const [mileage, setMileage] = useState({ from: "", to: "" });
 const [filters, setFilters] = useState({
  brand: "",
  price: { min: "", max: "" },
  mileage: { min: "", max: "" },
 });

 const handleBrandChange = (event) => {
  const newFilters = { ...filters, brand: event.target.value };
  setFilters(newFilters);
  onFilterChange(newFilters);
 };

 const handlePriceChange = (event) => {
  const newPrice = event.target.value;
  setSelectedPrice(newPrice);
  // Припускаючи, що ви хочете оновити об'єкт filters з новою ціною
  onFilterChange({ ...filters, price: newPrice });
 };

 const handleMileageChange = (event) => {
  const { name, value } = event.target;
  setMileage((prevMileage) => ({
   ...prevMileage,
   [name]: value.replace(/\D/g, ""), // Видаляємо всі нечислові символи
  }));
 };

 const handleSearch = (event) => {
  event.preventDefault();
  onSearch(filters); // Викликаємо функцію onSearch і передаємо їй поточні фільтри
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
     <SelectPrice value={selectedPrice} onChange={handlePriceChange}>
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
      value={mileage.from}
      onChange={handleMileageChange}
      placeholder="From"
     />
     <InputTo
      type="text"
      name="to"
      value={mileage.to}
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
