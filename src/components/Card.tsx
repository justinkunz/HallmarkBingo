import React from 'react';
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
    border: solid 1px black;
  }

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const FlexItemWrapper = styled.div`
  max-height: 25vw;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: ${theme.light};
`;

const Card: React.FC = ({ children }) => {
  const [selected, setSelected] = React.useState<boolean>(false);

  const handleClick = () => setSelected(!selected);

  return (
    <FlexCell backgroundColor={selected ? theme.secondary : theme.primary} onClick={handleClick}>
      <FlexItemWrapper>
        <FlexItem>{children}</FlexItem>
      </FlexItemWrapper>
    </FlexCell>
  );
};

export default Card;
