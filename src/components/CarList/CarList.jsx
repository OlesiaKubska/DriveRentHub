import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertsAsync } from "../../redux/operations";
import { getAllAdverts } from "../../redux/selectors";
import AdvertCard from "../AdvertCard/AdvertCard";
import ModalLearnMore from "../ModalLearnMore/ModalLearnMore";
import { CardGrid, Button } from "./CarList.styled";

const CarList = () => {
 const [isModalOpen, setModalOpen] = useState(false);
 const [selectedAdvertId, setSelectedAdvertId] = useState(null);
 const dispatch = useDispatch();
 const adverts = useSelector(getAllAdverts);
 const [page, setPage] = useState(1);

 useEffect(() => {
  dispatch(fetchAdvertsAsync({ page, limit: 12 }));
 }, [dispatch, page]);

 const handleLoadMore = () => {
  setPage((prevPage) => prevPage + 1);
 };

 const handleOpenModal = (id) => {
  setSelectedAdvertId(id);
  setModalOpen(true);
 };

 const handleCloseModal = () => {
  setModalOpen(false);
  setSelectedAdvertId(null);
 };

 return (
  <div>
   <CardGrid>
    {adverts.map((advert) => (
     <AdvertCard
      key={advert.id}
      advert={advert}
      onOpenModal={handleOpenModal}
     />
    ))}
   </CardGrid>
   <Button onClick={handleLoadMore}>Load more</Button>
   <ModalLearnMore
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    advertId={selectedAdvertId}
   />
  </div>
 );
};

export default CarList;

// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAdvertsAsync } from "../../redux/operations";
// import { getAllAdverts } from "../../redux/selectors";
// import ModalLearnMore from "../ModalLearnMore/ModalLearnMore";
// import HeartIcon from "../HeartIcon/HeartIcon";
// import {
//  Card,
//  CarImage,
//  CardContent,
//  CarTitle,
//  CarDetails,
//  LearnMoreButton,
//  CardGrid,
//  Span,
//  ModelName,
//  Button,
// } from "./CarList.styled";

// const CarList = () => {
//  const [isModalOpen, setModalOpen] = useState(false);
//  const dispatch = useDispatch();
//  const adverts = useSelector(getAllAdverts);
//  const [page, setPage] = useState(1);
//  const [selectedAdvertId, setSelectedAdvertId] = useState(null);

//  useEffect(() => {
//   dispatch(fetchAdvertsAsync({ page, limit: 12 }));
//  }, [dispatch, page]);

//  const handleLoadMore = () => {
//   setPage((prevPage) => prevPage + 1);
//  };

//  const handleOpenModal = (id) => {
//   setSelectedAdvertId(id);
//   setModalOpen(true);
//  };

//  const handleCloseModal = () => {
//   setModalOpen(false);
//   setSelectedAdvertId(null);
//  };

//  return (
//   <div>
//    <CardGrid>
//     {adverts.map((car) => (
//      <Card key={car.id}>
//       <CarImage src={car.img} alt={`${car.make} ${car.model}`} />
//       <HeartIcon advertId={car.id} />
//       <CardContent>
//        <div>
//         <CarTitle>
//          {`${car.make}`} <ModelName>{`${car.model}`}</ModelName>
//          {", "}
//          {`${car.year}`}
//         </CarTitle>
//         <Span>{`${car.rentalPrice}`}</Span>
//        </div>
//        <CarDetails>
//         {`${car.address.split(", ").slice(-2).join(" | ")} | ${
//          car.rentalCompany
//         } | ${"Premium"}`}
//        </CarDetails>
//        <CarDetails>
//         {`${car.type} | ${car.model} | ${car.id} | ${car.functionalities[0]}`}
//        </CarDetails>
//        <LearnMoreButton onClick={() => handleOpenModal(car.id)}>
//         Learn more
//        </LearnMoreButton>
//       </CardContent>
//      </Card>
//     ))}
//    </CardGrid>
//    <Button onClick={handleLoadMore}>Load more</Button>
//    <ModalLearnMore
//     isOpen={isModalOpen}
//     onClose={handleCloseModal}
//     advertId={selectedAdvertId}
//    />
//   </div>
//  );
// };

// export default CarList;
