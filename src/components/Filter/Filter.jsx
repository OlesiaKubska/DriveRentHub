import { useState } from "react";
import PropTypes from "prop-types";
import brands from "../../makes.json";

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
  <form onSubmit={handleSearch}>
   <div>
    <p>Car brand</p>
    <select value={filters.brand} onChange={handleBrandChange}>
     <option value="">Enter the text</option>
     {brands.map((brand) => (
      <option key={brand} value={brand}>
       {brand}
      </option>
     ))}
    </select>
   </div>
   <div>
    <p>Price/ 1 hour</p>
    <select value={selectedPrice} onChange={handlePriceChange}>
     <option value="">To $</option>
     <option value="30">30</option>
     <option value="40">40</option>
     <option value="50">50</option>
     <option value="60">60</option>
     <option value="70">70</option>
     <option value="80">80</option>
    </select>
   </div>
   <div>
    <p>Car mileage / km</p>
    <input
     type="text"
     name="from"
     value={mileage.from}
     onChange={handleMileageChange}
     placeholder="From"
    />
    <input
     type="text"
     name="to"
     value={mileage.to}
     onChange={handleMileageChange}
     placeholder="To"
    />
   </div>
   <button type="submit">Search</button>
  </form>
 );
};

Filter.propTypes = {
 onFilterChange: PropTypes.func.isRequired,
 onSearch: PropTypes.func.isRequired,
};

export default Filter;
