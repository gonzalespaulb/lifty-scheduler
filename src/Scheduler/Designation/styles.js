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
`;

export const DesignationCard = styled.div`
  border: 1px solid #000;
`;

export const DesignationNameContainer = styled.div`
  width: 100%;
  background: #000;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DesignationName = styled.span`
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  font-weight: bold;
`;

export const StationPosition = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

export const StationInfoContainer = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
`;

export const Position = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: #000;
  transform: rotate(-90deg);
`;

export const EmployeeContainer = styled.div`
  height: auto;
  flex: 1;
`;

export const NameContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  
  :not(:last-child) {
    border-bottom: 1px solid #000;
  }

  :first-child {
    border-top: 1px solid #000;
  }
  `;

export const Name = styled.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
`;

export const JobContainer = styled.div`
  height: 100%;
  min-width: 30px;
  display: flex;

`;

export const Job = styled.div`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-left: 1px solid #000;
`;

export const JobTitle = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: #000;
  transform: rotate(-90deg);
`;
