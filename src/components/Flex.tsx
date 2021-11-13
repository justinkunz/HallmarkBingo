import styled from 'styled-components';

interface FlexProps {
  justifyContent?: string;
  flexDirection?: string;
  height?: string;
  scale?: number;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: string;
  overflow?: 'visible' | 'hidden';
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: ${({ height }) => height};
  ${({ scale }) => scale && `transform: scale(${scale});`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
`;

export default Flex;
