export const flex = (
    justify = "flex-start",
    align = "flex-start",
    direction = "row"
  ) => {
    const flexDefault = `
      display: flex; 
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${direction};
    `;
  
    return flexDefault;
  };