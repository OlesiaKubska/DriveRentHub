import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";

import {
 FooterContainer,
 SocialLinks,
 FooterText,
 FooterCopy,
 FooterBox,
 TextBox,
 Icon,
} from "./Footer.styled";

const Footer = () => {
 return (
  <FooterContainer>
   <FooterBox>
    <SocialLinks>
     <a href="https://facebook.com">
      <Icon>
       <FaFacebookF />
      </Icon>
     </a>
     <a href="https://telegram.com">
      <Icon>
       <FaTelegramPlane />
      </Icon>
     </a>
     <a href="https://instagram.com">
      <Icon>
       <FaInstagram />
      </Icon>
     </a>
    </SocialLinks>
    <TextBox>
     <FooterText>Email: info@drivehub.com</FooterText>
     <FooterText>Phone: +38095678901</FooterText>
     <FooterText>Address: 123 Peremogy St, Kiev, Ukraine</FooterText>
    </TextBox>
   </FooterBox>
   <div>
    <FooterCopy>&copy; 2024 DriveHub. All rights reserved.</FooterCopy>
   </div>
  </FooterContainer>
 );
};

export default Footer;
