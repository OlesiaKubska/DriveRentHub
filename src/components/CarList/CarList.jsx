import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertsAsync } from "../../redux/operations";
import { getFilteredAdverts } from "../../redux/selectors";
// import { updateFilters } from "../../redux/filtersSlice";
import AdvertCard from "../AdvertCard/AdvertCard";
import ModalLearnMore from "../ModalLearnMore/ModalLearnMore";
import { CardGrid, Button } from "./CarList.styled";

const CarList = () => {
 const [isModalOpen, setModalOpen] = useState(false);
 const [selectedAdvertId, setSelectedAdvertId] = useState(null);
 const dispatch = useDispatch();
 const adverts = useSelector(getFilteredAdverts);
 const filters = useSelector((state) => state.filters);
 const [page, setPage] = useState(1);

 useEffect(() => {
  dispatch(fetchAdvertsAsync({ page, limit: 12, filters }));
 }, [dispatch, page, filters]);

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
