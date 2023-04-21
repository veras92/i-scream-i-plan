import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectTheme } from 'redux/theme/selectors';
import { ThemeProvider } from '@emotion/react';
import { THEME_OPTIONS } from 'shared/services/themeOptions';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'shared/styles/GlobalStyles.styled';

import { themeLight, themeDark } from './theme';
import { useAuth } from 'hooks/useAuth';
import { setTheme } from 'redux/theme/themeSlice';

export const CustomThemeProvider = ({ children }) => {
  const [isThemeRefreshing, setIsThemeRefreshing] = useState(true);
  const { accessToken } = useAuth();
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);

  useEffect(() => {
    if (!accessToken) dispatch(setTheme(THEME_OPTIONS.light));
    setIsThemeRefreshing(false);
  }, [dispatch, accessToken]);

  return (
    <ThemeProvider
      theme={mode === THEME_OPTIONS.light ? themeLight : themeDark}
    >
      <Global styles={GlobalStyles} />
      {isThemeRefreshing ? null : children}
    </ThemeProvider>
  );
};
