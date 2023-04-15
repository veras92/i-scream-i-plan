import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectTheme } from 'redux/theme/selectors';
import { refreshTheme } from 'redux/theme/operations';
import { ThemeProvider } from '@emotion/react';
import { THEME_OPTIONS } from 'shared/services/themeOptions';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'shared/styles/GlobalStyles.styled';

import { themeLight, themeDark } from './theme';

export const CustomThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshTheme());
  }, [dispatch]);

  return (
    <ThemeProvider
      theme={mode === THEME_OPTIONS.light ? themeLight : themeDark}
    >
      <Global styles={GlobalStyles} />
      {children}
    </ThemeProvider>
  );
};
