import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAdverts, getFavoritesAdverts } from "../../redux/selectors";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { Card } from "../../components/CarList/CarList.styled";
import Header from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Box, StyledIcon, FavoritesBox } from "./FavoritesPage.styled";
import ModalLearnMore from "../../components/ModalLearnMore/ModalLearnMore";
import { FaPlus } from "react-icons/fa";

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
    {favoriteAdverts.length === 0 ? (
     <FavoritesBox>
      <h2>Your favorite adverts will be displayed here.</h2>
      <p>Please click on the plus sign and select adverts from the catalog.</p>
      <Link to="/catalog">
       <StyledIcon>
        <FaPlus />
       </StyledIcon>
      </Link>
     </FavoritesBox>
    ) : (
     <Card>
      {favoriteAdverts.map((advert) => (
       <AdvertCard
        key={advert.id}
        advert={advert}
        onOpenModal={handleOpenModal}
       />
      ))}
     </Card>
    )}
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
