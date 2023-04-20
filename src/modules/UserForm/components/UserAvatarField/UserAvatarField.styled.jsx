import styled from '@emotion/styled';

export const Svg = styled.svg`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const UserAvatarWrapper = styled.div`
  position: relative;

  text-align: center;

  > h3 {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${props => props.theme.text};

    margin-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
  }

  > p {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: ${props => props.theme.textSecondary};

    @media (min-width: 768px) {
      font-size: 0.875rem;
      line-height: 1.125rem;
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
  border: 2px solid #3e85f3;
  background-color: ${({ theme }) => theme.bgcUserAvatar};
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
  align-items: center;

  width: 0.875rem;
  height: 0.875rem;
  border: 0;
  padding: 0;

  border-radius: 50%;
  background-color: ${props => props.theme.componentAccent};

  :before {
    position: absolute;
    content: '+';

    width: 0.875rem;
    height: 0.875rem;

    font-size: 0.9375rem;
    line-height: 0.8125rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.componentPrimary};
    background-color: ${props => props.theme.componentAccent};
  }

  @media (min-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;

    top: 9.0625rem;
    right: 1.5rem;

    :before {
      position: absolute;
      content: '+';
      color: ${props => props.theme.componentPrimary};
      font-size: 1.5625rem;
      line-height: 1.375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      background-color: ${props => props.theme.componentAccent};
    }
  }

  @media (min-width: 1087px) {
    top: 10.3125rem;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  padding-top: 10px;
`;
export const StyledError = styled.h6`
  color: red;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  top: 50px;

  right: 50%;
  transform: translate(50%, -50%);
  white-space: nowrap;
  @media (min-width: 768px) {
    top: 180px;
  }

  @media (min-width: 1086px) {
    top: 200px;
  }
`;
