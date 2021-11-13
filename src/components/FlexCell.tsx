import styled from 'styled-components';
import theme from '../theme.json';

interface FlexCellProps {
  backgroundColor: string;
}

const FlexCell = styled.div<FlexCellProps>`
  & {
    flex: 1;
    display: flex;
    justify-content: center;
    background: ${({ backgroundColor }) => backgroundColor};
    border: solid 1px ${theme.dark};
  }

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export default FlexCell;
