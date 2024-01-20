import {
 FooterContainer,
 SocialLinks,
 FooterText,
 FooterCopy,
 FooterBox,
 TextBox,
} from "./Footer.styled";

const Footer = () => {
 return (
  <FooterContainer>
   <FooterBox>
    <SocialLinks>
     <a href="https://facebook.com">Facebook</a>
     <a href="https://twitter.com">Twitter</a>
     <a href="https://instagram.com">Instagram</a>
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
