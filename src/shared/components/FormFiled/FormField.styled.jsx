import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: ${props => props.theme.textSecondary};
`;

export const Input = styled.input`
  background-color: ${props => props.theme.bcgTernary};
  outline: none;
  border: 1px solid ${props => props.theme.disabled};
  border-radius: 8px;
  color: ${props => props.theme.text};
  padding: 0.875rem;

  width: 100%;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: ${props => props.theme.text};
  }
`;
