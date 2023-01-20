import Designation from "./Designation/Designation";
import Nav from "./Nav/Nav";
import { MainContainer } from "./styles";

const Scheduler = () => {
  return (
    <MainContainer>
      {/* Render Lift Station */}

      {/* Render Other Designations */}
        <Nav></Nav>
        <Designation></Designation>
    </MainContainer>
  );
};

export default Scheduler;
