import styled from "styled-components";
import theme from "../theme.json";

const Button = styled.button`
  background-color: ${theme.palette.accent};
  color: ${theme.palette.light};
  font-family: ${theme.font.default};
  padding: 14px 20px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
`;

export default Button;
