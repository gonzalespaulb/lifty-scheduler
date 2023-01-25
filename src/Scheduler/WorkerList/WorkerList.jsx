import { liftList } from "../utils/designationList";

const WorkerList = () => {
  let newWorkerList = [];

  for (const lift of liftList) {
    if (lift.mid === undefined) {
      const liftWorkerList = [lift.top, lift.bottom].flat();

      for (const worker of liftWorkerList) {
        worker.supervisor = lift.supervisor;
        worker.designation = lift.name;
        newWorkerList.push(worker);
      }
      continue;
    }

    const liftWorkerList = [lift.top, lift.mid, lift.bottom].flat();

    for (const worker of liftWorkerList) {
      worker.supervisor = lift.supervisor;
      worker.designation = lift.name;
      newWorkerList.push(worker);
    }
  }

  console.log(newWorkerList.flat());

  return <div></div>;
};

export default WorkerList;
