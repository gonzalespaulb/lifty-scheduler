import {
  DashedLine,
  DesignationCard,
  DesignationEmployees,
  EmployeeContainer,
  EmployeeName,
  EmployeeStatus,
  EmployeeStatusContainer,
  LiftBottom,
  LiftTop,
  MainContainer,
  Name,
  NameContainer,
  SolidLine,
  TimeIn,
} from "./styles";

const Designation = () => {
  const liftList = [
    {
      name: "#0 CIRQUE",
      top: [],
      bottom: [],
      supervisor: "",
      ridePassed: true,
    },
    {
      name: "#1 SKYCAB",
      top: [],
      bottom: [],
      supervisor: "",
      ridePassed: true,
    },
    {
      name: "#3 SAM'S KNOB",
      top: [],
      bottom: [],
      supervisor: "",
      ridePassed: true,
    },
    {
      name: "#4 BIG BURN",
      top: [],
      bottom: [],
      supervisor: "",
      ridePassed: true,
    },
  ];

  const nonLiftList = [
    {
      name: "SUPERVISORS",
      workers: [],
    },
    {
      name: "RELIEF",
      workers: [],
    },
    {
      name: "OFFICE",
      workers: [],
    },
    {
      name: "EXTRAS",
      workers: [],
    },
  ];

  const renderLifts = () => {
    // Map through lift designations here

    return liftList.map((item) => {
      return (
        <DesignationCard>
          <NameContainer>
            <Name>{item.name}</Name>
          </NameContainer>
          <DesignationEmployees>
            <LiftTop>
              <EmployeeContainer>
                <EmployeeStatusContainer>
                  <EmployeeStatus>FOR</EmployeeStatus>
                </EmployeeStatusContainer>
                <EmployeeName>Paul G.</EmployeeName>
                <DashedLine />
                <TimeIn>7:45</TimeIn>
              </EmployeeContainer>

              <EmployeeContainer>
                <EmployeeStatusContainer>
                  <EmployeeStatus>FOR</EmployeeStatus>
                </EmployeeStatusContainer>
                <EmployeeName>Paul G.</EmployeeName>
                <DashedLine />
                <TimeIn>7:45</TimeIn>
              </EmployeeContainer>

              <EmployeeContainer>
                <EmployeeStatusContainer>
                  <EmployeeStatus>FOR</EmployeeStatus>
                </EmployeeStatusContainer>
                <EmployeeName>Paul G.</EmployeeName>
                <DashedLine />
                <TimeIn>7:45</TimeIn>
              </EmployeeContainer>
            </LiftTop>
            <SolidLine />
            <LiftBottom>

            <EmployeeContainer>
                <EmployeeStatusContainer>
                  <EmployeeStatus>FOR</EmployeeStatus>
                </EmployeeStatusContainer>
                <EmployeeName>Paul G.</EmployeeName>
                <DashedLine />
                <TimeIn>7:45</TimeIn>
              </EmployeeContainer>

              <EmployeeContainer>
                <EmployeeStatusContainer>
                  <EmployeeStatus>FOR</EmployeeStatus>
                </EmployeeStatusContainer>
                <EmployeeName>Paul G.</EmployeeName>
                <DashedLine />
                <TimeIn>7:45</TimeIn>
              </EmployeeContainer>
            </LiftBottom>
          </DesignationEmployees>
        </DesignationCard>
      );
    });
  };

  const renderNonLifts = () => {
    // Map through non lift designations here

    return nonLiftList.map((item) => {
      return (
        <DesignationCard>
          <NameContainer>
            <Name>{item.name}</Name>
          </NameContainer>
          <DesignationEmployees>
          <EmployeeContainer>
                <EmployeeStatusContainer>
                  <EmployeeStatus>FOR</EmployeeStatus>
                </EmployeeStatusContainer>
                <EmployeeName>Paul G.</EmployeeName>
                <DashedLine />
                <TimeIn>7:45</TimeIn>
              </EmployeeContainer>

              <EmployeeContainer>
                <EmployeeStatusContainer>
                  <EmployeeStatus>FOR</EmployeeStatus>
                </EmployeeStatusContainer>
                <EmployeeName>Paul G.</EmployeeName>
                <DashedLine />
                <TimeIn>7:45</TimeIn>
              </EmployeeContainer>
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
