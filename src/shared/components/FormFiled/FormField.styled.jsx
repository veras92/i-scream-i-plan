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

  color: #111111;
`;

export const Input = styled.input`
  background: #FFFFFF;
  outline: none;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;

  padding: 0.875rem;

  width: 100%;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: #DCE3E5;
  }
`;

