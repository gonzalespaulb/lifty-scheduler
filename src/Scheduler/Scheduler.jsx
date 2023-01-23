import Designation from "./Designation/Designation";
import Nav from "./Nav/Nav";
import { MainContainer } from "./styles";

const Scheduler = () => {
  return (
    <MainContainer>
        <Nav></Nav>
        <Designation></Designation>
    </MainContainer>
  );
};

export default Scheduler;
