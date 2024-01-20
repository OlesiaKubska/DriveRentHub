import PropTypes from "prop-types";

import {
 Card,
 CarImage,
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
  <Card>
   <CardImageContainer>
    <CarImage src={advert.img} alt={`${advert.make} ${advert.model}`} />
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
     {`${advert.address.split(", ").slice(-2).join(" | ")} | ${
      advert.rentalCompany
     } | ${"Premium"}`}
    </CarDetails>
    <CarDetails>
     {`${advert.type} | ${advert.model} | ${advert.id} | ${advert.functionalities[0]}`}
    </CarDetails>
    <LearnMoreButton onClick={() => onOpenModal(advert.id)}>
     Learn more
    </LearnMoreButton>
   </CardContent>
  </Card>
 );
};

AdvertCard.propTypes = {
 advert: PropTypes.object.isRequired,
 onOpenModal: PropTypes.func.isRequired,
};

export default AdvertCard;
