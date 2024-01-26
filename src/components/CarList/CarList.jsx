import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertsAsync } from "../../redux/operations";
import { getFilteredAdverts, selectPagination } from "../../redux/selectors";
import { incrementPage } from "../../redux/advertsSlice";
import AdvertCard from "../AdvertCard/AdvertCard";
import ModalLearnMore from "../ModalLearnMore/ModalLearnMore";
import { CardGrid, Button } from "./CarList.styled";

const CarList = () => {
 const [isModalOpen, setModalOpen] = useState(false);
 const [selectedAdvertId, setSelectedAdvertId] = useState(null);
 const dispatch = useDispatch();
 const adverts = useSelector(getFilteredAdverts);
 const pagination = useSelector(selectPagination);

 useEffect(() => {
  dispatch(
   fetchAdvertsAsync({
    page: pagination.currentPage,
    limit: pagination.itemsPerPage,
   })
  );
 }, [
  pagination.currentPage,
  dispatch,
  pagination.itemsPerPage,
  pagination.totalItems,
 ]);

 const handleLoadMore = () => {
  if (pagination.currentPage < pagination.totalPages) {
   dispatch(incrementPage());
  }
 };

 const handleOpenModal = (id) => {
  setSelectedAdvertId(id);
  setModalOpen(true);
 };

 const handleCloseModal = () => {
  setModalOpen(false);
  setSelectedAdvertId(null);
 };

 const showLoadMoreButton = pagination.currentPage < pagination.totalPages;

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
   {showLoadMoreButton && <Button onClick={handleLoadMore}>Load more</Button>}
   <ModalLearnMore
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    advertId={selectedAdvertId}
   />
  </div>
 );
};

export default CarList;
