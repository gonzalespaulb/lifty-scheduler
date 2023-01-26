import Designation from "./Designation/Designation";
import Nav from "./Nav/Nav";
import { MainContainer } from "./styles";
import WorkerList from "./WorkerList/WorkerList";
import { Routes, Route, useLocation } from "react-router-dom";

const Scheduler = () => {
  const location = useLocation();

  return (
      <MainContainer>
        <Nav></Nav>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Designation />} />
          <Route path="/list" element={<WorkerList />} />
        </Routes>
      </MainContainer>
  );
};

export default Scheduler;
