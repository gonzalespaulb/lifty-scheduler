import Designation from "./Designation/Designation";
import Nav from "./Nav/Nav";
import { MainContainer } from "./styles";

const Scheduler = () => {
  const renderLifts = () => {
    // Map through lift designations here
  };

  const renderNonLifts = () => {
    // Map through non lift designations here
  };

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
