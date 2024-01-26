import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getAdvertDetails } from "../../redux/selectors";

import {
 ModalBackdrop,
 ModalContainer,
 CloseButton,
 InfoBox,
 CarImage,
 RentalCarButton,
 CarTitle,
 Description,
 RentalBox,
 Condition,
 Title,
 StyledFaTimes,
} from "./ModalLearnMore.styled";

import { ModelName, CarDetails } from "../AdvertCard/AdvertCard.styled";

const ModalLearnMore = ({ isOpen, onClose, advertId }) => {
 const modalRoot = document.querySelector("#modal-root");
 const advertDetails = useSelector((state) =>
  getAdvertDetails(state, advertId)
 );

 useEffect(() => {
  const bodyScroll = (disable) => {
   document.body.style.overflow = disable ? "hidden" : "auto";
  };

  const handleEscape = (event) => {
   if (event.code === "Escape") onClose();
  };

  if (isOpen) {
   bodyScroll(true);
   window.addEventListener("keydown", handleEscape);
  }

  return () => {
   bodyScroll(false);
   window.removeEventListener("keydown", handleEscape);
  };
 }, [isOpen, onClose]);

 if (!isOpen || !advertDetails) return null;

 const rentalConditionsArray = advertDetails.rentalConditions.split("\n");

 const HighlightNumber = ({ text }) => {
  const parts = text.split(/(\d+)/).map((part, index) =>
   /\d+/.test(part) ? (
    <span key={index} style={{ color: "#3470FF" }}>
     {part}
    </span>
   ) : (
    part
   )
  );

  return <>{parts}</>;
 };

 return createPortal(
  <ModalBackdrop onClick={onClose}>
   <ModalContainer onClick={(e) => e.stopPropagation()}>
    <CloseButton onClick={onClose}>
     <StyledFaTimes />
    </CloseButton>
    <InfoBox>
     <CarImage
      src={advertDetails.img}
      alt={`${advertDetails.make} ${advertDetails.model}`}
     />
     <CarTitle>
      {advertDetails.make} <ModelName>{advertDetails.model}</ModelName>,{" "}
      {advertDetails.year}
     </CarTitle>
     <CarDetails>
      {advertDetails.address.split(", ").slice(-2).join(" | ")} |{" "}
      {`Id: ${advertDetails.id}`} | {`Year: ${advertDetails.year}`} |{" "}
      {`Type: ${advertDetails.type}`}
     </CarDetails>
     <CarDetails>
      {`Fuel Consumption: ${advertDetails.fuelConsumption}`} |{" "}
      {`Engine Size: ${advertDetails.engineSize}`}
     </CarDetails>
     <Description>{advertDetails.description}</Description>
     <Title>Accessories and functionalities:</Title>
     <CarDetails>{advertDetails.accessories.join(" | ")}</CarDetails>
     <CarDetails>{advertDetails.functionalities.join(" | ")}</CarDetails>
     <Title>Rental Conditions:</Title>
     <RentalBox>
      {rentalConditionsArray.map((condition, index) => (
       <Condition key={index}>
        <HighlightNumber text={condition} />
       </Condition>
      ))}
      <Condition>
       <HighlightNumber
        text={`Mileage: ${advertDetails.mileage.toLocaleString("en-US")}`}
       />
      </Condition>
      <Condition>
       <HighlightNumber text={`Price: ${advertDetails.rentalPrice}`} />
      </Condition>
     </RentalBox>
     <RentalCarButton href="tel:+38095678901">Rental car</RentalCarButton>
    </InfoBox>
   </ModalContainer>
  </ModalBackdrop>,
  modalRoot
 );
};

ModalLearnMore.propTypes = {
 onClose: PropTypes.func.isRequired,
 isOpen: PropTypes.bool,
 advertId: PropTypes.number,
 text: PropTypes.string,
};

export default ModalLearnMore;
