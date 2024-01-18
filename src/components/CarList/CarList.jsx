import { useState, useEffect } from "react";
import axios from "axios";

const CarList = () => {
 const [cars, setCars] = useState([]);
 const [visibleCars, setVisibleCars] = useState(12);

 useEffect(() => {
  const fetchCars = async () => {
   try {
    const response = await axios.get(
     "https://65a97c89219bfa3718695671.mockapi.io/adverts"
    );
    setCars(response.data);
   } catch (error) {
    console.error("Error fetching cars:", error);
   }
  };

  fetchCars();
 }, []);

 const handleLoadMore = () => {
  setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
 };

 return (
  <div>
   {cars.slice(0, visibleCars).map((car) => (
    <div key={car.id}>
     <h3>
      {car.make} {car.model}
     </h3>
     <p>{car.description}</p>
     <button
      onClick={() => {
       /* logic to open modal with car details */
      }}
     >
      Learn more
     </button>
    </div>
   ))}
   {visibleCars < cars.length && (
    <button onClick={handleLoadMore}>Load more</button>
   )}
  </div>
 );
};

export default CarList;
