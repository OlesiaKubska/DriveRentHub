import { useSelector } from "react-redux";
import { getAllAdverts, getFavoritesAdverts } from "../../redux/selectors";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { CardGrid } from "../../components/CarList/CarList.styled";
import Header from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";

const FavoritesPage = () => {
 const favorites = useSelector(getFavoritesAdverts);
 const adverts = useSelector(getAllAdverts);

 const favoriteAdverts = adverts.filter((advert) =>
  favorites.includes(advert.id)
 );

 return (
  <Section>
   <Header />
   <div>
    <CardGrid>
     {favoriteAdverts.map((advert) => (
      <AdvertCard key={advert.id} advert={advert} onOpenModal={() => {}} />
     ))}
    </CardGrid>
   </div>
  </Section>
 );
};

export default FavoritesPage;
