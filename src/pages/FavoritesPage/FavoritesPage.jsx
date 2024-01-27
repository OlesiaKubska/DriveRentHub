import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAdverts, getFavoritesAdverts } from "../../redux/selectors";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { Card } from "../../components/CarList/CarList.styled";
import Header from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Box } from "./FavoritesPage.styled";
import ModalLearnMore from "../../components/ModalLearnMore/ModalLearnMore";

const FavoritesPage = () => {
 const favorites = useSelector(getFavoritesAdverts);
 const adverts = useSelector(selectAdverts);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedAdvert, setSelectedAdvert] = useState(null);

 const favoriteAdverts = adverts.filter((advert) =>
  favorites.includes(advert.id)
 );

 const handleOpenModal = (advert) => {
  setSelectedAdvert(advert);
  setIsModalOpen(true);
 };

 const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedAdvert(null);
 };

 return (
  <Section>
   <Header />
   <Box>
    <Card>
     {favoriteAdverts.map((advert) => (
      <AdvertCard
       key={advert.id}
       advert={advert}
       onOpenModal={handleOpenModal}
      />
     ))}
    </Card>
   </Box>
   <ModalLearnMore
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    advertId={selectedAdvert}
   />
  </Section>
 );
};

export default FavoritesPage;
