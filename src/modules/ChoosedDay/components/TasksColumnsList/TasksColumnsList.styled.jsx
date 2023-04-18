import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { BREAKPOINTS } from 'shared/services/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const ColumnsWrapper = styled.ul`
  display: flex;
  ${media({
    gap: ['22px', '22px', '16px', '27px'],
  })};

  
`;

export const StyledColumn = styled.li`
  padding: 18px;
  min-width: 335px;
  background: ${props => props.theme.bcgTernary};
  border: 1px solid ${props => props.theme.disabledSecondary};
  border-radius: 8px;

  max-height: 432px;
  overflow-y: auto;

  over @media (min-width: 765px) {
    padding: 20px;
    max-width: 344px;
    max-height: 568px;
  }
`;
