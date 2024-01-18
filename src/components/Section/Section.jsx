import { SectionWrapper } from "./Section.styled";
import PropTypes from "prop-types";

export const Section = ({ className, children }) => {
 return (
  <section className={className}>
   <SectionWrapper>{children}</SectionWrapper>
  </section>
 );
};

Section.propTypes = {
 className: PropTypes.string,
 children: PropTypes.node.isRequired,
};
