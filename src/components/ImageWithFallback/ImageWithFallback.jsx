import PropTypes from "prop-types";
import defaultImage from "../../assets/images/background/car.jpg";
import { CarImage } from "../AdvertCard/AdvertCard.styled";

const ImageWithFallback = ({ src, alt, ...props }) => {
 const handleError = (event) => {
  event.target.src = defaultImage;
 };

 return <CarImage src={src} alt={alt} onError={handleError} {...props} />;
};

ImageWithFallback.propTypes = {
 src: PropTypes.string.isRequired,
 alt: PropTypes.string.isRequired,
};

export default ImageWithFallback;
