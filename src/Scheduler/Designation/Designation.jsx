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

        const colorCode = (position) => {
          if(position === "FOR") {
            return "#C36C5E";
          }

          if(position === "OPR") {
            return "#F0B93D"
          }

          else return "transparent"
        }

        return worker.position.map((_, i) => {

          return (
            <EmployeeInfoContainer positionBg={colorCode(worker.position[i])} key={i}>
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
            <DesignationName>{lift.name.toUpperCase()}</DesignationName>
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
            <DesignationName>{nonLift.name.toUpperCase()}</DesignationName>
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
