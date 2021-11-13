import styled from 'styled-components';

interface FlexProps {
  justifyContent?: string;
  flexDirection?: string;
  height?: string;
  scale?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: ${({ height }) => height};
  ${({ scale }) => scale && `transform: scale(${scale});`}
`;

export default Flex;
