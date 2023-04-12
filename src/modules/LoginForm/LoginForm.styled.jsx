import styled from '@emotion/styled';

export const Svg = styled.svg`
  fill: transparent;
  stroke: #ffffff;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: rgba(17, 17, 17, 0.1);
  }
`;
