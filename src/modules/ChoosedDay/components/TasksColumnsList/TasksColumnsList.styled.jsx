import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { BREAKPOINTS } from 'shared/services/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));
export const Conatainer = styled.div`
  max-height: 432px;
  overflow-x: auto;

  @media (min-width: 765px) {
    max-height: 568px;
  }
`;
export const ColumnsWrapper = styled.ul`
  display: flex;

  gap: 16px;
  justify-content: space-between;

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  ${media({
    gap: ['22px', '22px', '16px', '27px'],
  })}; */
`;

export const StyledColumn = styled.li`
  padding: 18px;
  flex-grow: 1;
  min-width: 335px;
  background: ${props => props.theme.bcgTernary};
  border: 1px solid ${props => props.theme.disabledSecondary};
  border-radius: 8px;

  min-height: 432px;

  @media (min-width: 765px) {
    padding: 20px;
    min-width: 344px;
  }
`;
