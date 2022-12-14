import React, { FC, memo, useEffect, useState } from 'react';

import { Icon } from 'components';

import './theme.css';
import { ThemeProps } from './types';
import cn from 'classnames';
import { APP_ROOT_ID, DARK_THEME_CLASS, LIGHT_THEME_CLASS } from 'utils/constants';
import { useAppDispatch } from 'store';
import { saveTheme } from 'store/user/thunk';

export const Theme: FC<ThemeProps> = memo(({ classes }) => {
  const dispatch = useAppDispatch();

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const getRoot = () => document.querySelector(`#${APP_ROOT_ID}`);

  useEffect(() => {
    setIsDarkTheme(getRoot()?.classList.contains(DARK_THEME_CLASS) || false);
  }, []);

  const handleToggleTheme = () => {
    const isDark = !isDarkTheme;
    const rootNode = getRoot();

    setIsDarkTheme(isDark);

    if (rootNode) {
      rootNode.classList.toggle(DARK_THEME_CLASS);
    }

    dispatch(saveTheme(isDark ? DARK_THEME_CLASS : LIGHT_THEME_CLASS));
  };

  return (
    <button className={cn('theme__wrapper', classes)} onClick={handleToggleTheme}>
      <Icon name={isDarkTheme ? 'sun' : 'moon'} />
    </button>
  );
});
