import styled from '@emotion/styled';

export const WrapperPeriodPaginator = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 8px;
  }
`;

export const Li = styled.li`
  display: flex;

  height: 30px;

  @media (min-width: 768px) {
    height: 36px;
  }
`;
export const Btn = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;

  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: ${props => props.theme.bcgTernary};
  &:disabled {
    background-color: ${props => props.theme.bcgTernary};

    & svg {
      stroke: ${props => props.theme.SvgDisabled};
    }
  }

  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  & svg {
    fill: transparent;
    stroke: ${props => props.theme.SvgArowSecondary};
  }
  @media (min-width: 768px) {
    width: 38px;
  }
`;

export const StyledDate = styled.p`
  display: inline-block;

  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  padding: 6px 12px;

  border-radius: 8px;

  background-color: #3e85f3;
  color: #ffffff;

  text-transform: uppercase;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
