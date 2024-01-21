import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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
    <h2>Your Trusted Car Rental Partner in Ukraine</h2>
    <Description>
     <li>Wide Range of Vehicles</li>
     <li>Flexibility for Any Journey</li>
     <li>Comfort and Quality</li>
     <li>Affordable Solutions for Everyone</li>
    </Description>
   </Container>
   <Footer />
  </HomeSection>
 );
};

export default HomePage;
