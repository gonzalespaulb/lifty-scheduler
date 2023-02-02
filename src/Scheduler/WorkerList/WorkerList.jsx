import { useState } from "react";
import { liftList, nonLiftList } from "../utils/designationList";
import {
  CrossIcon,
  EmployeeStatus,
  EmployeeStatusContainer,
  Info,
  InfoContainer,
  MainContainer,
  Name,
  Worker,
  WorkerContainer,
} from "./styles";

const WorkerList = () => {
  let allWorkers = [];

  for (const lift of liftList) {

    const designationPosition = (worker) => {
      if (lift.top.includes(worker)) {
        return `Top ${lift.name}`;
      }

      if (lift.mid && lift.mid.includes(worker)) {
        return `Mid ${lift.name}`;
      }

      if (lift.bottom.includes(worker)) {
        return `Bottom ${lift.name}`;
      }
    };

    if (lift.mid === undefined) {
      const liftWorkerList = [lift.top, lift.bottom].flat();

      for (const worker of liftWorkerList) {
        worker.supervisor = lift.supervisor;
        worker.designation = designationPosition(worker);

        allWorkers.push(worker);
      }
      continue;
    }

    const liftWorkerList = [lift.top, lift.mid, lift.bottom].flat();

    for (const worker of liftWorkerList) {
      worker.supervisor = lift.supervisor;
      worker.designation = designationPosition(worker);
      allWorkers.push(worker);
    }
  }

  for (const nonLift of nonLiftList) {
    for (const worker of nonLift.workers) {
      worker.supervisor = "Greg Green";
      worker.designation = nonLift.name;
      allWorkers.push(worker);
    }
  }

  const workersToRender = allWorkers.flat();

  const [openInfo, setOpenInfo] = useState(false);
  const [activeInfo, setActiveInfo] = useState(null);

  const renderWorkers = () => {
    const openAccordion = (index) => {
      if (activeInfo === index) {
        setActiveInfo(null);
        setOpenInfo(false);
      } else {
        setActiveInfo(index);
        setOpenInfo(true);
      }
    };

    return workersToRender.map((worker, i) => {
      return (
        <Worker openInfo={openInfo} activeInfo={activeInfo} index={i}>
          <WorkerContainer>
            <Name>{worker.name}</Name>
            <CrossIcon
              onClick={() => openAccordion(i)}
              openInfo={openInfo}
              activeInfo={activeInfo}
              index={i}
            />
          </WorkerContainer>
          <InfoContainer>
            <EmployeeStatusContainer>
              <EmployeeStatus>{worker.position}</EmployeeStatus>
            </EmployeeStatusContainer>
            <Info>Supervisor: {worker.supervisor}</Info>
            <Info>Designation: {worker.designation}</Info>
            <Info>Shift Time: {worker.time}</Info>
            <Info></Info>
          </InfoContainer>
        </Worker>
      );
    });
  };

  return <MainContainer>{renderWorkers()}</MainContainer>;
};

export default WorkerList;
