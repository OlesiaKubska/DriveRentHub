import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toggleFavorite } from "../../redux/favoritesSlice";
import { HeartIconButton, HeartSvg } from "./HeartIcon.styled";
import sprite from "../../assets/sprite/symbol-defs.svg";

const HeartIcon = ({ advertId, isFavorite }) => {
 const dispatch = useDispatch();

 const handleToggleFavorite = () => {
  dispatch(toggleFavorite(advertId));
 };

 return (
  <HeartIconButton onClick={handleToggleFavorite}>
   <HeartSvg isFavorite={isFavorite}>
    <use href={`${sprite}#icon-heart`}></use>
   </HeartSvg>
  </HeartIconButton>
 );
};

HeartIcon.propTypes = {
 advertId: PropTypes.number.isRequired,
 isFavorite: PropTypes.bool,
};

export default HeartIcon;
