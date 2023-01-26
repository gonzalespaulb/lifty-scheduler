import styled from "styled-components";
import cross from "./assets/cross.png";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Worker = styled.div`
  width: 100%;
  max-height: ${(props) =>
    props.openInfo && props.activeInfo === props.index ? "187px" : "75px"};
  overflow: hidden;
  transition: max-height 0.3s ease;

  :not(:last-child) {
    border-bottom: 1px solid #000;
  }
`;

export const WorkerContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Name = styled.span`
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
  color: #000;
`;

export const CrossIcon = styled.div`
  height: 40%;
  transform: rotate(45deg);
  aspect-ratio: 1/1;
  background-image: url(${cross});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Info = styled.span`
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 16px;
  padding: 0 20px;
`;
