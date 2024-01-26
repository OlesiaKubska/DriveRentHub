import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getFavoritesAdverts } from "../../redux/selectors";
import { toggleFavorite } from "../../redux/favoritesSlice";
import {
 HeartIconButton,
 StyledFaRegHeart,
 StyledFaHeart,
} from "./HeartIcon.styled";

const HeartIcon = ({ advertId }) => {
 const dispatch = useDispatch();
 const favorites = useSelector(getFavoritesAdverts);
 const isFavorite = favorites.includes(advertId);

 const handleToggleFavorite = () => {
  dispatch(toggleFavorite(advertId));
 };

 return (
  <HeartIconButton onClick={handleToggleFavorite}>
   {isFavorite ? <StyledFaHeart /> : <StyledFaRegHeart />}
  </HeartIconButton>
 );
};

HeartIcon.propTypes = {
 advertId: PropTypes.number.isRequired,
};

export default HeartIcon;
