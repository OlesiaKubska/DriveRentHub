import { useSelector } from "react-redux";
import { getAllAdverts, getFavoritesAdverts } from "../../redux/selectors";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { CardGrid } from "../../components/CarList/CarList.styled";
import Header from "../../components/Header/Header";

const FavoritesPage = () => {
 const favorites = useSelector(getFavoritesAdverts);
 const adverts = useSelector(getAllAdverts);

 const favoriteAdverts = adverts.filter((advert) =>
  favorites.includes(advert.id)
 );

 return (
  <>
   <Header />
   <div>
    <CardGrid>
     {favoriteAdverts.map((advert) => (
      <AdvertCard key={advert.id} advert={advert} onOpenModal={() => {}} />
     ))}
    </CardGrid>
   </div>
  </>
 );
};

export default FavoritesPage;
