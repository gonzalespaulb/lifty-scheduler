import styled from "styled-components";
import logo from "./assets/logo.png";
import userActive from "./assets/userActive.png";
import userInactive from "./assets/userInactive.png";

export const MainContainer = styled.div`
  width: 100%;
  height: 75px;
  background: white;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #000;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Date = styled.span`
  font-size: 18px;
  line-height: 18px;
  color: #000;
  font-weight: bold;
`;

export const PeopleTab = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  background-image: url(${userInactive});
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;
