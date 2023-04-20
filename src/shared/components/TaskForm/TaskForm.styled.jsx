import styled from '@emotion/styled';
import { DEVICE_SIZE_PX } from 'shared/services/deviceWidth';

export const Form = styled.form`
  width: 100%;
  @media (min-width: ${DEVICE_SIZE_PX.mobile}) {
    width: 267px;
  }
  @media (min-width: ${DEVICE_SIZE_PX.tablet}) {
    width: 340px;
  }

  & > div {
    margin-bottom: 16px;
    @media (min-width: ${DEVICE_SIZE_PX.tablet}) {
      margin-bottom: 18px;
    }
  }
`;

export const TimePickerWrap = styled.ul`
  display: flex;
  gap: 14px;

  width: 100%;
  margin-bottom: 18px;

  @media (min-width: ${DEVICE_SIZE_PX.tablet}) {
    margin-bottom: 28px;
  }

  & li {
    flex-basis: calc((100% - 14px) / 2);
    & div {
      width: 100%;
    }
  }
`;

export const RadioBtnsWrap = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

export const RadioBtnsWrapItem = styled.li``;

export const Svg = styled.svg`
  fill: transparent;
  stroke: #ffffff;
`;

export const BtnsWrap = styled.ul`
  display: flex;
  gap: 14px;

  @media (min-width: ${DEVICE_SIZE_PX.mobile}) {
    display: grid;
    column-gap: 14px;
    grid-template-columns: 135px 118px;
  }

  @media (min-width: ${DEVICE_SIZE_PX.tablet}) {
    grid-template-columns: 182px 144px;
  }
`;

export const BtnsWrapItem = styled.li`
  flex-basis: calc((100% - 14px) / 2);
`;

export const Button = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${props => props.theme.componentAccent};
  box-shadow: 4px 2px 16px ${props => props.theme.btnShadow};

  border-radius: 8px;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: ${props => props.theme.componentPrimary};

  @media (min-width: 765px) {
    ppadding-top: 14px;
    padding-bottom: 14px;
  }
`;

export const Cancel = styled(Button)`
  color: ${props => props.theme.cancelBtnColor};
  background-color: ${props => props.theme.bgcCancelBtn};
`;
