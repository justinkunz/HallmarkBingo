import styled from 'styled-components';

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
`;

export default Box;
