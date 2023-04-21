import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectTheme } from 'redux/theme/selectors';
import { ThemeProvider } from '@emotion/react';
import { THEME_OPTIONS } from 'shared/services/themeOptions';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'shared/styles/GlobalStyles.styled';

import { themeLight, themeDark } from './theme';
import { useAuth } from 'hooks/useAuth';
import { refreshTheme, setTheme } from 'redux/theme/themeSlice';

export const CustomThemeProvider = ({ children }) => {
  const { accessToken } = useAuth();
  const persistedMode = useSelector(selectTheme);
  const [mode, setMode] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) dispatch(setTheme(THEME_OPTIONS.light));
    dispatch(refreshTheme());
    setMode(persistedMode);
  }, [dispatch, accessToken, persistedMode]);

  return (
    <ThemeProvider
      theme={mode === THEME_OPTIONS.light ? themeLight : themeDark}
    >
      <Global styles={GlobalStyles} />
      {children}
    </ThemeProvider>
  );
};
