import {
  DesignationCard,
  EmployeeContainer,
  MainContainer,
  Name,
  NameContainer,
  Position,
  DesignationNameContainer,
  DesignationName,
  StationPosition,
  StationInfoContainer,
  JobContainer,
  EmployeeInfoContainer,
  EmployeeInfo,
} from "./styles";
import { liftList, nonLiftList } from "../utils/designationList";

const Designation = () => {
  const renderWorkers = (workerList) => {
    return workerList.map((worker, i) => {

      const renderEmployeePositions = () => {
        return worker.position.map((_, i) => {

          return (
            <EmployeeInfoContainer key={i}>
              <EmployeeInfo>{worker.position[i]}</EmployeeInfo>
            </EmployeeInfoContainer>
          );
        });
      };

      return (
        <NameContainer key={i}>
          <Name>{worker.name}</Name>
          <JobContainer>
            {renderEmployeePositions()}
            <EmployeeInfoContainer>
              <EmployeeInfo>{worker.time}</EmployeeInfo>
            </EmployeeInfoContainer>
          </JobContainer>
        </NameContainer>
      );
    });
  };

  const renderLifts = () => {
    return liftList.map((lift, i) => {
      return (
        <DesignationCard key={i}>
          <DesignationNameContainer>
            <DesignationName>{lift.name}</DesignationName>
          </DesignationNameContainer>

          <StationPosition stationExists={lift.top}>
            <StationInfoContainer>
              <Position>TOP</Position>
            </StationInfoContainer>
            <EmployeeContainer>
              {lift.top && renderWorkers(lift.top)}
            </EmployeeContainer>
          </StationPosition>

          <StationPosition stationExists={lift.mid}>
            <StationInfoContainer>
              <Position>MID</Position>
            </StationInfoContainer>
            <EmployeeContainer>
              {lift.mid && renderWorkers(lift.mid)}
            </EmployeeContainer>
          </StationPosition>

          <StationPosition stationExists={lift.bottom}>
            <StationInfoContainer>
              <Position>BOT</Position>
            </StationInfoContainer>
            <EmployeeContainer>
              {lift.bottom && renderWorkers(lift.bottom)}
            </EmployeeContainer>
          </StationPosition>
        </DesignationCard>
      );
    });
  };

  const renderNonLifts = () => {
    return nonLiftList.map((nonLift, i) => {
      return (
        <DesignationCard key={i}>
          <DesignationNameContainer>
            <DesignationName>{nonLift.name}</DesignationName>
          </DesignationNameContainer>
          <EmployeeContainer>
            {nonLift.workers && renderWorkers(nonLift.workers)}
          </EmployeeContainer>
        </DesignationCard>
      );
    });
  };

  return (
    <MainContainer>
      {renderLifts()}
      {renderNonLifts()}
    </MainContainer>
  );
};

export default Designation;
