import styled from '@emotion/styled';

export const Svg = styled.svg`
  fill: transparent;
  stroke: var(--main-blue-color);
`;

export const UserAvatarWrapper = styled.div`
  position: relative;

  text-align: center;

  > h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #343434;

    margin-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: 18px;
      margin-bottom: 0.5rem;
    }
  }

  > p {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #616161;

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;

  margin-bottom: 1.125rem;
  margin-top: -37px;

  border-radius: 50%;
  border: 2px solid #3E85F3;
  background-color: #FFFFFF;
  overflow: hidden;

  & > img {
    object-fit: contain;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    width: 124px;
    height: 124px;
  }

  @media (min-width: 1087px) {
    margin-top: 60px;
  }

`;

export const HiddenInput = styled.input`
  position: absolute;
  top: 1.4375rem;
  right: 0.875rem;

  display: flex;
  justify-content: center;
  aling-itms: center;
  
  width: 14px;
  height: 14px;
  // margin: -1px;
  border: 0;
  padding: 0;

  border-radius: 50%;
  background-color: #000;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 9.0625rem;
    right: 1.5rem;
  }

  @media (min-width: 1087px) {
    top: 10.3125rem;
  }

  // white-space: nowrap;
  // clip-path: inset(100%);
  // clip: rect(0 0 0 0);
  // overflow: hidden;
`;
