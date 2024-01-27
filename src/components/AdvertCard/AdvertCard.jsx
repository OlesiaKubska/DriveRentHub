import PropTypes from "prop-types";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

import {
 CardItem,
 CardContent,
 CarTitle,
 CarDetails,
 LearnMoreButton,
 Span,
 ModelName,
 CardImageContainer,
} from "./AdvertCard.styled";
import HeartIcon from "../HeartIcon/HeartIcon";

const AdvertCard = ({ advert, onOpenModal }) => {
 return (
  <CardItem>
   <CardImageContainer>
    <ImageWithFallback
     src={advert.img}
     alt={`${advert.make} ${advert.model}`}
    />
    <HeartIcon advertId={advert.id} />
   </CardImageContainer>
   <CardContent>
    <div>
     <CarTitle>
      {`${advert.make}`} <ModelName>{`${advert.model}`}</ModelName>
      {", "}
      {`${advert.year}`}
     </CarTitle>
     <Span>{`${advert.rentalPrice}`}</Span>
    </div>
    <CarDetails>
     <span>{`${advert.address.split(", ").slice(-2).join(" | ")}`}</span>
     <span>{`${advert.rentalCompany}`}</span>
     <span>{`${"Premium"}`}</span>
    </CarDetails>
    <CarDetails>
     <span>{`${advert.type}`}</span>
     <span>{`${advert.model}`}</span>
     <span>{`${advert.id}`}</span>
     <span>{`${advert.functionalities[0]}`}</span>
    </CarDetails>
    <LearnMoreButton onClick={() => onOpenModal(advert.id)}>
     Learn more
    </LearnMoreButton>
   </CardContent>
  </CardItem>
 );
};

AdvertCard.propTypes = {
 advert: PropTypes.object.isRequired,
 onOpenModal: PropTypes.func.isRequired,
};

export default AdvertCard;
