import Designation from "./Designation/Designation";
import Nav from "./Nav/Nav";
import { MainContainer } from "./styles";
import WorkerList from "./WorkerList/WorkerList";

const Scheduler = () => {

  return (
    <MainContainer>
        <Nav></Nav>
        {/* <Designation></Designation> */}
        <WorkerList></WorkerList>
    </MainContainer>
  );
};

export default Scheduler;
