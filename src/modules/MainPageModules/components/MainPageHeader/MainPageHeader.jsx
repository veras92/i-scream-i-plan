import goose from 'shared/icons/goose.svg';
import sprite from 'shared/icons/sprite.svg';
import {
  AppTitle,
  ButtonSvg,
  ButtonWrapper,
  LogInBtn,
  LogoImg,
  SignUpBtn,
  StyledHeader,
} from './MainPageHeader.styled';
import { ROUTES } from 'shared/services/routes';

export const MainPageHeader = () => {
  return (
    <StyledHeader>
      <LogoImg src={goose} alt="goose" />
      <AppTitle>GooseTrack</AppTitle>
      <ButtonWrapper>
        <SignUpBtn to={ROUTES.register}>Sign up</SignUpBtn>
        <LogInBtn to={ROUTES.login}>
          Log in
          <ButtonSvg>
            <use href={`${sprite}#icon-Log-in`} />
          </ButtonSvg>
        </LogInBtn>
      </ButtonWrapper>
    </StyledHeader>
  );
};
