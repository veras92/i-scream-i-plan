import styled from 'styled-components';
import facepaint from 'facepaint';
import { BREAKPOINTS } from 'shared/services/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const HomepageContainer = styled.div`
  ${media({
    padding: ['64px 20px', '64px 20px', '64px 32px', '64px 128px'],
  })};
`;
