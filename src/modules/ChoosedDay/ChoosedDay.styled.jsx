import styled from '@emotion/styled';
import { DEVICE_SIZE_PX } from 'shared/services/deviceWidth';

export const Wrap = styled.div`
  min-height: calc(100vh - 302px);

  @media (min-width: ${DEVICE_SIZE_PX.tablet}) {
    min-height: calc(100vh - 220px);
  }
`;
