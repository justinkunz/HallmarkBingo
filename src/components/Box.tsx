import styled from "styled-components";
import theme from "../theme.json";

interface BoxProps {
  height?: string | number;
  maxHeight?: string | number;
  width?: string | number;
  maxWidth?: string | number;
  position?: string;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  margin?: string;
  padding?: string;
  lineHeight?: string | number;
  textAlign?: string;
  backgroundColor?: string;
  clickable?: boolean;
  withBorder?: boolean;
  withBoxShadow?: boolean;
  zIndex?: number;
}
const Box = styled.div<BoxProps>`
  ${({ height }) => height && `height: ${height};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ withBorder }) =>
    withBorder && `border: solid 1px ${theme.palette.dark};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex}`}
  ${({ withBoxShadow }) =>
    withBoxShadow && `box-shadow: 8px 8px 14px -6px rgb(47 46 46 / 77%);`}
  ${({ clickable }) =>
    clickable &&
    `
  &:hover {
    cursor: pointer;
  }
  `}
`;

export default Box;
