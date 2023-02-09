import { allEmployees } from "./employeeList";

const foreperson = "FOR";
const attendant = "ATT";
const operator = "OPR";
const admin = "ADM";
const supervisor = "SUP";
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
    top: [whosWorking(0, [attendant, foreperson], "7:45")],
    bottom: [
      whosWorking(1, [foreperson], "7:45"),
      whosWorking(2, [attendant], "7:45"),
    ],
    supervisor: "Jeff Thomas",
    ridePassed: true,
  },
  {
    name: "#1 SKYCAB",
    top: [whosWorking(3, [attendant], "7:15")],
    bottom: [whosWorking(4, [attendant], "7:15")],
    supervisor: "Mel Boyer",
    ridePassed: true,
  },
  {
    name: "#1 NIGHTCAB",
    top: [whosWorking(5, [operator], "11:00")],
    bottom: [
      whosWorking(6, [attendant], "11:00"),
      whosWorking(7, [attendant], "11:00"),
    ],
    supervisor: "Mel Boyer",
    ridePassed: true,
  },
  {
    name: "#3 SAM'S KNOB",
    top: [whosWorking(8, [operator], "6:45")],
    bottom: [
      whosWorking(9, [foreperson], "6:45"),
      whosWorking(10, [attendant], "6:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#4 BIG BURN",
    top: [whosWorking(11, [operator], "6:45")],
    bottom: [
      whosWorking(12, [foreperson], "6:45"),
      whosWorking(13, [attendant], "6:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#5 CAMPGROUND",
    top: [whosWorking(14, [operator], "7:15")],
    bottom: [
      whosWorking(15, [foreperson], "6:45"),
      whosWorking(16, [attendant], "6:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#7 GONDOLA",
    top: [
      whosWorking(20, [operator], "6:45"),
      whosWorking(22, [attendant], "6:45"),
    ],
    mid: [
      whosWorking(25, [attendant], "6:45"),
      whosWorking(24, [attendant], "7:45"),
    ],
    bottom: [
      whosWorking(21, [foreperson], "6:45"),
      whosWorking(23, [attendant], "6:45"),
      whosWorking(26, [attendant], "7:45"),
      whosWorking(27, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#8 ALPINE SPRINGS",
    top: [whosWorking(28, [operator], "6:45")],
    bottom: [
      whosWorking(29, [foreperson], "6:45"),
      whosWorking(30, [attendant], "6:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#9 SHEER BLISS",
    top: [whosWorking(41, [operator], "6:45")],
    bottom: [
      whosWorking(42, [foreperson], "6:45"),
      whosWorking(43, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#10 ELK CAMP",
    top: [whosWorking(44, [operator], "6:45")],
    bottom: [
      whosWorking(45, [foreperson], "6:45"),
      whosWorking(46, [attendant], "7:45"),
      whosWorking(47, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#12 HIGH ALPINE",
    top: [whosWorking(48, [operator], "6:45")],
    bottom: [
      whosWorking(49, [foreperson], "6:45"),
      whosWorking(50, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#14 MEADOWS",
    top: [whosWorking(66, [attendant], "7:45")],
    bottom: [
      whosWorking(67, [operator], "7:45"),
      whosWorking(68, [attendant], "7:45"),
      whosWorking(69, [attendant], "7:45"),
      whosWorking(70, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },

  {
    name: "#16 TWO CREEKS",
    top: [whosWorking(51, [operator], "7:15")],
    bottom: [
      whosWorking(52, [foreperson], "7:15"),
      whosWorking(53, [attendant], "7:15"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#18 VILLAGE EXPRESS",
    top: [whosWorking(54, [operator], "6:45")],
    mid: [
      whosWorking(55, [attendant], "7:45"),
      whosWorking(57, [attendant], "6:45"),
    ],
    bottom: [
      whosWorking(56, [foreperson], "6:45"),
      whosWorking(58, [attendant], "6:45"),
      whosWorking(59, [attendant], "7:45"),
      whosWorking(60, [attendant], "7:45"),
      whosWorking(61, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "#19 CONEY GLADES",
    top: [whosWorking(63, [operator], "7:45")],
    bottom: [
      whosWorking(64, [foreperson], "7:45"),
      whosWorking(65, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "TUBE HILL",
    top: [whosWorking(72, [attendant], "7:45")],
    bottom: [
      whosWorking(73, [attendant], "7:45"),
      whosWorking(74, [attendant], "7:45"),
    ],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "LOWER PINES",
    bottom: [whosWorking(75, [attendant], "7:45")],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
  {
    name: "UPPER PINES",
    bottom: [whosWorking(76, [attendant], "7:45")],
    supervisor: "Calvin Leinenbach",
    ridePassed: true,
  },
];

export const nonLiftList = [
  {
    name: "EXTRAS",
    workers: [
      whosWorking(77, [attendant], "6:45"),
      whosWorking(78, [attendant], "7:45"),
      whosWorking(79, [attendant], "7:45"),
      whosWorking(80, [attendant], "7:45"),
      whosWorking(62, [attendant], "7:45"),
    ],
  },
  {
    name: "SUPERVISORS",
    workers: [
      whosWorking(31, [supervisor], "7:15"),
      whosWorking(32, [supervisor], "7:15"),
    ],
  },
  {
    name: "RELIEF",
    workers: [
      whosWorking(33, [relief], "7:15"),
      whosWorking(34, [relief], "7:15"),
      whosWorking(35, [relief], "7:15"),
      whosWorking(36, [relief], "7:15"),
      whosWorking(37, [relief], "7:15"),
    ],
  },
  {
    name: "OFFICE",
    workers: [whosWorking(39,[admin], "6:30"), whosWorking(40, [admin], "6:30")],
  },
];
