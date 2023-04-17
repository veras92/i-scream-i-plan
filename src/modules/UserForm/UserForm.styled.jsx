import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;

  // ----------------
  outline: 1px solid #000;
  margin: 20px;
  // -----------------

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
  padding: 40px 18px;
  gap: 18px;

  @media (min-width: 768px) {
    padding: 40px 0px;
    max-width: 354px;
  }

  @media (min-width: 1078px) {
    padding: 40px 0px;
    max-width: 758px;

    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 24px;
  }

  @media (min-width: 1440px) {
    max-width: 1080px;
  }

  @media (min-width: 1600px) {
    max-width: 1440px;
    padding: 50px;
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  }
`;