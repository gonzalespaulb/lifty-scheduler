import { useState } from "react";
import { liftList, nonLiftList } from "../utils/designationList";
import { sortAlphabetically, upperCaseEveryOther } from "../utils/helper";
import {
  CrossIcon,
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
    // NOTE ------------------------------------------------------------------ ASSIGNS WORKER'S STATION POSITION

    const designationPosition = (worker) => {
      if (lift?.top?.includes(worker)) {
        return `Top ${lift.name}`;
      }

      if (lift?.mid?.includes(worker)) {
        return `Mid ${lift.name}`;
      }

      if (lift?.bottom?.includes(worker)) {
        return `Bottom ${lift.name}`;
      }
    };

    // NOTE ------------------------------------------------------------------ CHECKS IF STATION POSITION EXISTS

    const checkStation = (stationPositions) => {
      let liftWorkerList = stationPositions.filter((station) => {
        return station !== undefined;
      });

      liftWorkerList = liftWorkerList.flat();

      for (const worker of liftWorkerList) {
        worker.supervisor = lift.supervisor;
        worker.designation = designationPosition(worker);
        allWorkers.push(worker);
      }
    };

    checkStation([lift.top, lift.mid, lift.bottom]);
  }

  // NOTE ------------------------------------------------------------------ NON LIFT PERSONEL TO BE RENDERED

  for (const nonLift of nonLiftList) {
    for (const worker of nonLift.workers) {
      worker.supervisor = "Greg Green";
      worker.designation = nonLift.name;
      allWorkers.push(worker);
    }
  }

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

    sortAlphabetically(allWorkers);

    return allWorkers.flatMap((worker, i) => {
      return (
        <Worker openInfo={openInfo} activeInfo={activeInfo} index={i} key={i}>
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
            <Info>
              Position:  
              {` ${worker.position[0]}`} 
              {worker.position[1] ? " |" : ""}{" "}
              {worker?.position[1]}


            </Info>
            <Info>Supervisor: {worker.supervisor}</Info>
            <Info>Designation: {upperCaseEveryOther(worker.designation)}</Info>
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
