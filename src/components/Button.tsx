import styled from "styled-components";
import theme from "../theme.json";

const Button = styled.button`
  background-color: ${theme.palette.accent};
  color: ${theme.palette.light};
  font-family: ${theme.font.default};
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 10px;
  border: none;
`;

export default Button;
