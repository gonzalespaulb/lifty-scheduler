import styled from "styled-components";
import { flex } from "./utils/helpers";

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${flex(undefined, undefined, "column")}
`;
