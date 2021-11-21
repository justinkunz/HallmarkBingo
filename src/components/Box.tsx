import styled from 'styled-components';

interface BoxProps {
  height?: string | number;
  maxHeight?: string | number;
  width?: string | number;
  maxWidth?: string | number;
}
const Box = styled.div<BoxProps>`
  ${({ height }) => height && `height: ${height};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export default Box;
