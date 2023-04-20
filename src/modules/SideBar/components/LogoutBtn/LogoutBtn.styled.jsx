import styled from '@emotion/styled';
import { DEVICE_SIZE_PX } from 'shared/services/deviceWidth';

export const Wrap = styled.div`
  @media (min-width: ${DEVICE_SIZE_PX.desktop}) {
    position: fixed;
    bottom: 24px;
    left: 24px;
  }
`;
