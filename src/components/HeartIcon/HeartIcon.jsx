import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getFavoritesAdverts } from "../../redux/selectors";
import { toggleFavorite } from "../../redux/favoritesSlice";
import { HeartIconButton, HeartSvg } from "./HeartIcon.styled";
import sprite from "../../assets/sprite/symbol-defs.svg";

const HeartIcon = ({ advertId }) => {
 const dispatch = useDispatch();
 const favorites = useSelector(getFavoritesAdverts);
 const isFavorite = favorites.includes(advertId);

 const handleToggleFavorite = () => {
  dispatch(toggleFavorite(advertId));
 };

 return (
  <HeartIconButton onClick={handleToggleFavorite}>
   <HeartSvg $isFavorite={isFavorite}>
    <use href={`${sprite}#icon-heart`}></use>
   </HeartSvg>
  </HeartIconButton>
 );
};

HeartIcon.propTypes = {
 advertId: PropTypes.number.isRequired,
};

export default HeartIcon;
