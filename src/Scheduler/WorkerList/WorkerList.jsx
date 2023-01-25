import { liftList } from "../utils/designationList";

const WorkerList = () => {
  let newWorkerList = [];

  for (const lift of liftList) {
    if (lift.mid === undefined) {
      const liftWorkerList = [lift.top, lift.bottom].flat();

      const designationPosition = (worker) => {
        if (lift.top.includes(worker)) {
          return `Top ${lift.name}`;
        }

        if (lift.bottom.includes(worker)) {
          return `Bottom ${lift.name}`;
        }
      };

      for (const worker of liftWorkerList) {
        worker.supervisor = lift.supervisor;
        worker.designation = designationPosition(worker);

        newWorkerList.push(worker);
      }
      continue;
    }

    const liftWorkerList = [lift.top, lift.mid, lift.bottom].flat();

    const designationPosition = (worker) => {
      if (lift.top.includes(worker)) {
        return `Top ${lift.name}`;
      }

      if (lift.mid.includes(worker)) {
        return `Mid ${lift.name}`;
      }

      if (lift.bottom.includes(worker)) {
        return `Bottom ${lift.name}`;
      }
    };

    for (const worker of liftWorkerList) {
      worker.supervisor = lift.supervisor;
      worker.designation = designationPosition(worker);
      newWorkerList.push(worker);
    }
  }

  const workers = newWorkerList.flat();

  

  return <div></div>;
};

export default WorkerList;
