import styled from 'styled-components';
import theme from '../theme.json';

interface TextProps {
  fontSize?: number;
  color?: string;
  flexibleSize?: boolean;
  asHeading?: boolean;
}

const Text = styled.span<TextProps>`
  ${({ fontSize = 12 }) => `font-size: ${fontSize}px;`}
  ${({ color }) => color && `color: ${color};`}
  font-family: ${({ asHeading = false }) => (asHeading ? theme.font.heading : theme.font.default)};

  ${({ flexibleSize, fontSize = 12 }) =>
    flexibleSize &&
    `
    @media (max-width: 325px) {
    font-size: ${fontSize * 0.75}px;
  }
  `}
`;

export default Text;
