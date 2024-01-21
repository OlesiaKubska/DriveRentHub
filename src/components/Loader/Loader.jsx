import { DotLoader } from "react-spinners";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
 return (
  <LoaderContainer>
   <DotLoader color="#0B44CD" size={80} />
  </LoaderContainer>
 );
};

export default Loader;
