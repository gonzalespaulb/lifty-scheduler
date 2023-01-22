import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  align-items: start;
  grid-gap: 20px;
  padding: 20px;
  width: 100%;

  background: blue;
`;

export const DesignationCard = styled.div`
  background: green;
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
`;

export const LiftTop = styled.div`
  height: 200px;
  width: 100%;

  background: white;
`;

export const SolidLine = styled.div`
  border-top: 2px solid #000;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const LiftBottom = styled.div`
  height: 200px;
  width: 100%;

  background: white;
`;

export const EmployeeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EmployeeStatusContainer = styled.div``;

export const EmployeeStatus = styled.span``;

export const TimeIn = styled.span``;

export const DashedLine = styled.div`
  border-top: 2px dashed #000;
`;
