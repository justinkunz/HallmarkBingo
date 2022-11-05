import styled from "styled-components";
import theme from "../theme.json";

const Button = styled.button`
  background-color: ${theme.palette.accent};
  color: ${theme.palette.light};
  font-family: ${theme.font.default};
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
`;

export default Button;
