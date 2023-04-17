import styled from '@emotion/styled';

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  margin-right: 14px;

  @media (min-width: 765px) {
    font-size: 18px;
    line-height: 1;
  }
  color: ${props => props.theme.text};
`;

export const UserPicture = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border: 1.8px solid ${props => props.theme.componentAccent};
  border-radius: 50%;

  @media (min-width: 765px) {
    width: 44px;
    height: 44px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;
