import styled from 'styled-components';

interface TextProps {
  fontSize?: string;
  color?: string;
}

const Text = styled.span<TextProps>`
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ color }) => color && `color: ${color};`}
`;

export default Text;
