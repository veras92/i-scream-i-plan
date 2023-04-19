import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  background-color: ${props => props.theme.bcgTernary};

  & > button {
    padding: 14px 50px;
    margin-top: 0px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      padding: 15px 84px;
    }

    @media (min-width: 1087px) {
      margin-bottom: 60px;
    }
  }
`;

export const FormBody = styled.div`
  width: 100%;
  display: grid;
  padding: 0px 18px;
  margin: 40px 0;
  gap: 18px;

  @media (min-width: 768px) {
    max-width: 354px;
    padding: 0px;
  }

  @media (min-width: 1078px) {
    max-width: 758px;

    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 24px;
  }

  @media (min-width: 1440px) {
    max-width: 1080px;
    padding-left: 164px;
    padding-right: 164px;
    margin-top: 44px;
    margin-bottom: 88px;
  }

  @media (min-width: 2560px) {
    max-width: 1440px;
    padding: 50px;
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  }
`;
