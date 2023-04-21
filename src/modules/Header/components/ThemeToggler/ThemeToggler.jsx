import sprite from 'shared/icons/sprite.svg';
import { toggleTheme } from 'redux/theme/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { THEME_OPTIONS } from 'shared/services/themeOptions';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };
  const mode = useSelector(selectTheme);

  return (
    <div>
      <ToggleButton onClick={handleThemeChange}>
        <ThemeIcon>
          <use
            href={
              mode === THEME_OPTIONS.light
                ? `${sprite}#icon-moon`
                : `${sprite}#icon-sun`
            }
          />
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};
