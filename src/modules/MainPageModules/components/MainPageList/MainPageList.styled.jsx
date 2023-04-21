import styled from '@emotion/styled/macro';
import facepaint from 'facepaint';
import { BREAKPOINTS } from 'shared/services/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const StyledBlock = styled.li`
  margin-bottom: 64px;
  @media (min-width: 765px) {
    display: flex;
    flex-direction: column;
    :nth-of-type(2) {
      & div:nth-of-type(1) {
        margin-left: auto;
      }
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 228px;
    justify-content: flex-end;
    :nth-of-type(2) {
      flex-direction: row-reverse;
      align-items: flex-start;
      & div:nth-of-type(1) {
        margin-left: 0;
      }
    }
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: 765px) {
    max-width: 275px;
  }
`;

export const TitleWrapper = styled.h2`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 14px;

  @media (min-width: 765px) {
    margin-bottom: 24px;
  }
`;

export const StyledNumber = styled.span`
  font-weight: 700;
  font-size: 80px;
  line-height: 1;
  letter-spacing: -4px;
  color: ${props => props.theme.componentAccent};
  margin-bottom: 14px;
  @media (min-width: 765px) {
    font-size: 104px;
  }
`;

export const StyledLabel = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  border-radius: 44px;
  padding: 8px 18px;
  margin-bottom: 8px;

  background-color: ${props => props.theme.bcgHomepage};
  color: ${props => props.theme.componentAccent};

  @media (min-width: 765px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledTitleText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  color: ${props => props.theme.homepageTitle};

  @media (min-width: 765px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: ${props => props.theme.homepageTitle};
  margin-bottom: 40px;

  ${media({
    marginBottom: ['40px', '40px', '48px', '0'],
  })};
`;

export const StyledImg = styled.img`
  width: 100%;
`;
