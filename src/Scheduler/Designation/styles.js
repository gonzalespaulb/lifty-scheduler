import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  grid-gap: 20px;
  padding: 20px;
  width: 100%;
  
  height: 600px;
  background: blue;
`;
