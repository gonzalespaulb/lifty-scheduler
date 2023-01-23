import { allEmployees } from "./employeeList";

const foreperson = "FOR";
const attendant = "ATT";
const operator = "OPR";
const admin = "ADM";
const lead = "LEAD";
const relief = "RLF";

const whosWorking = (empId, position, time) => {
  let { name, id } = allEmployees.find((empObj) => empObj.id === empId);

  return {
    name,
    id,
    position,
    time,
  };
};

export const liftList = [
  {
    name: "#0 CIRQUE",
    top: [whosWorking(0, operator, "7:45")],
    bottom: [
      whosWorking(1, foreperson, "7:45"),
      whosWorking(2, attendant, "7:45"),
    ],
    supervisor: "",
    ridePassed: true,
  },
  {
    name: "#1 SKYCAB",
    top: [whosWorking(3, operator, "7:15")],
    bottom: [whosWorking(4, foreperson, "7:45")],
    supervisor: "",
    ridePassed: true,
  },
  {
    name: "#1 NIGHTCAB",
    top: [whosWorking(5, operator, "7:45")],
    bottom: [
      whosWorking(6, foreperson, "7:45"),
      whosWorking(7, attendant, "7:45"),
    ],
    supervisor: "",
    ridePassed: true,
  },
];

export const nonLiftList = [
  {
    name: "EXTRAS",
    workers: [
      whosWorking(46, foreperson, "7:15"),
      whosWorking(47, attendant, "7:15"),
      whosWorking(48, attendant, "7:15"),
    ],
  },
  {
    name: "SUPERVISORS",
    workers: [
      whosWorking(31, lead, "7:15"),
      whosWorking(32, lead, "7:15"),
    ],
  },
  {
    name: "RELIEF",
    workers: [
      whosWorking(33, relief, "7:15"),
      whosWorking(34, relief, "7:15"),
      whosWorking(35, relief, "7:15"),
      whosWorking(36, relief, "7:15"),
      whosWorking(37, relief, "7:15"),
    ],
  },
  {
    name: "OFFICE",
    workers: [
      whosWorking(39, admin, "6:30"),
      whosWorking(40, admin, "6:30"),
    ],
  },
];
