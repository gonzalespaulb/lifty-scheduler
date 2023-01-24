import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  align-items: start;
  grid-gap: 8px;
  padding: 8px;
  width: 100%;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 0px;
  }

  // background: blue;
`;

export const DesignationCard = styled.div`
  border: 1px solid #000;
`;

export const NameContainer = styled.div`
  background: #000;
  width: 100%; 
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 24px;
  line-height: 24px;
  color: #fff;
`;

export const DesignationEmployees = styled.div`
  width: 100%;
  padding: 10px;
  // background: red;
`;

export const LiftTop = styled.div`
  width: 100%;
  background: white;
`;

export const LiftMid = styled.div`
  width: 100%;
  background: white;

`;

export const LiftBottom = styled.div`
  width: 100%;
  background: white;
`;

export const SolidLine = styled.div`
  border-top: 2px solid #000;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  display: ${(props) => props.renderLine ? "block" : "none"};
`;


export const EmployeeName = styled.span`
  font-size: 16px;
  line-height: 16px;
  margin-left: 8px;
`;

export const EmployeeContainer = styled.div`
  display: flex;
  align-items: center;
  // background: purple;
  width: 100%;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const EmployeeStatusContainer = styled.div`
  padding: 8px 16px;
  border-radius: 20px;

  background: green;
`;

export const EmployeeStatus = styled.span`
  font-size: 12px;

  color: white;
`;

export const TimeIn = styled.span`
font-size: 16px;
line-height: 16px;
`;

export const DashedLine = styled.div`
  border-top: 1px dashed #000;
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
  opacity: 0.2;
`;
