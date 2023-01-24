import {
  DashedLine,
  DesignationCard,
  DesignationEmployees,
  EmployeeContainer,
  EmployeeName,
  EmployeeStatus,
  EmployeeStatusContainer,
  LiftBottom,
  LiftMid,
  LiftTop, 
  MainContainer,
  Name,
  NameContainer,
  SolidLine,
  TimeIn,
} from "./styles";
import { liftList, nonLiftList } from "../utils/designationList";

const Designation = () => {

  const renderWorkers = (workerList) => {
    return workerList.map((worker, i) => {
      return (
        <EmployeeContainer key={i}>
          <EmployeeStatusContainer>
            <EmployeeStatus>{worker.position}</EmployeeStatus>
          </EmployeeStatusContainer>
          <EmployeeName>{worker.name}</EmployeeName>
          <DashedLine />
          <TimeIn>{worker.time}</TimeIn>
        </EmployeeContainer>
      );
    });
  };

  const renderLifts = () => {
    return liftList.map((lift, i) => {
      return (
        <DesignationCard key={i}>
          <NameContainer>
            <Name>{lift.name}</Name>
          </NameContainer>
          <DesignationEmployees>
            <LiftTop>{renderWorkers(lift.top)}</LiftTop>
            <SolidLine renderLine={true}/>
            <LiftMid>{lift.mid && renderWorkers(lift.mid)}</LiftMid>
            <SolidLine renderLine={lift.hasOwnProperty('mid')}/>
            <LiftBottom>{renderWorkers(lift.bottom)}</LiftBottom>
          </DesignationEmployees>
        </DesignationCard>
      );
    });
  };

  const renderNonLifts = () => {
    return nonLiftList.map((nonLift, i) => {
      return (
        <DesignationCard key={i}>
          <NameContainer>
            <Name>{nonLift.name}</Name>
          </NameContainer>
          <DesignationEmployees>
            {renderWorkers(nonLift.workers)}
          </DesignationEmployees>
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
