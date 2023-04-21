import styled from '@emotion/styled/macro';

export const TaskCard = styled.div`
  border: 1px solid red;
  height: 108px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 14px;

  @media (min-width: 765px) {
    height: 112px;
    margin-bottom: 18px;
  }
  background-color: ${props => props.theme.bcgSecondary};

  border: 1px solid ${props => props.theme.disabled};
  border-radius: 8px;
  padding: 14px 14px 18px;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  /* overflow: hidden; */
  white-space: nowrap;
  text-overflow: ellipsis;

  color: ${props => props.theme.text};
`;

const PriorityColor = props => {
  switch (props.children) {
    case 'low':
      return props.theme.bcgPriorityLowStrong;
    case 'medium':
      return props.theme.bcgPriorityMediumStrong;
    case 'high':
      return props.theme.bcgPriorityHighStrong;
    default:
      return 'orange';
  }
};

export const PriorityTitle = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PriorityColor};
  color: ${props => props.theme.componentPrimary};

  align-self: flex-end;
`;

export const UserLogo = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: black;

  background: linear-gradient(
    0deg,
    rgba(228, 216, 30, 0.7147233893557423) 9%,
    rgba(241, 255, 13, 0.8155637254901961) 100%
  );
  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${props => props.theme.componentAccent};
  overflow: hidden;
`;

export const CardInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInfo = styled.div`
  display: flex;
  gap: 8px;
`;
