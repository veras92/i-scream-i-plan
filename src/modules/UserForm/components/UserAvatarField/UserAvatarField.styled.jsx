import styled from '@emotion/styled';

export const Svg = styled.svg`
  fill: transparent;
  stroke: var(--main-blue-color);
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 124px;
  height: 124px;
  margin-bottom: 20px;
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
