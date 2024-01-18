import Header from "../../components/Header/Header";
import {
 Container,
 Heading,
 Description,
 HomeSection,
} from "./HomePage.styled";

const HomePage = () => {
 return (
  <HomeSection>
   <Header />
   <Container>
    <Heading>Welcom to DriveRentHub!</Heading>
    <Description>
     DriveRentHub is a leading car rental service in Ukraine, offering a wide
     range of vehicles to suit every taste and need. From small city cars to
     large family minivans, our fleet includes a variety of options to meet all
     your car rental needs. Whether you need a car for a business trip, a family
     vacation, or just to travel around the city, we provide you with comfort
     and quality.
    </Description>
   </Container>
  </HomeSection>
 );
};

export default HomePage;
