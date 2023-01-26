import { Date, LogoContainer, MainContainer, PeopleTab } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const listToggle = () => {
    if (location.pathname === "/list") {
      navigate("/");
    }

    if (location.pathname === "/") {
      navigate("/list");
    }
  };

  const goHome = () => {
    if (location.pathname === "/") {
      return;
    }

    navigate("/");
  };

  return (
    <MainContainer>
      <LogoContainer onClick={goHome}/>
      <Date>JANUARY 13 2023</Date>
      <PeopleTab onClick={listToggle} location={location.pathname}/>
    </MainContainer>
  );
};

export default Nav;
