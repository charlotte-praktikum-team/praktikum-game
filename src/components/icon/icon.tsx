import React, { FC, memo } from 'react';
import cn from 'classnames';
import { IconProps } from './types';

import './icon.css';

import ArrowLeft from '../../../assets/icons/arrowLeft.svg';
import Balls from '../../../assets/icons/balls.svg';
import Cross from '../../../assets/icons/cross.svg';
import Flask from '../../../assets/icons/flask.svg';
import Forum from '../../../assets/icons/forum.svg';
import Leaderboard from '../../../assets/icons/leaderboard.svg';
import Logout from '../../../assets/icons/logout.svg';
import Plus from '../../../assets/icons/plus.svg';
import Refresh from '../../../assets/icons/refresh.svg';
import User from '../../../assets/icons/user.svg';
import Yandex from '../../../assets/icons/yandex.svg';

const defaultAttributes = {
  preserveAspectRatio: 'xMidYMid meet',
  fill: 'currentColor',
};

export const Icon: FC<IconProps> = memo(({ name, size = 'm' }) => {
  const classNames = cn('icon', `icon_size-${size}`);

  switch (name) {
    case 'arrow-left': {
      return <ArrowLeft className={classNames} {...defaultAttributes} />;
    }

    case 'balls': {
      return <Balls className={classNames} {...defaultAttributes} fill='none' />;
    }

    case 'cross': {
      return <Cross className={classNames} {...defaultAttributes} />;
    }

    case 'flask': {
      return <Flask className={classNames} {...defaultAttributes} />;
    }

    case 'forum': {
      return <Forum className={classNames} {...defaultAttributes} />;
    }

    case 'leaderboard': {
      return <Leaderboard className={classNames} {...defaultAttributes} />;
    }

    case 'logout': {
      return <Logout className={classNames} {...defaultAttributes} />;
    }

    case 'plus': {
      return <Plus className={classNames} {...defaultAttributes} />;
    }

    case 'refresh': {
      return <Refresh className={classNames} {...defaultAttributes} />;
    }

    case 'user': {
      return <User className={classNames} {...defaultAttributes} />;
    }

    case 'yandex': {
      return <Yandex className={classNames} {...defaultAttributes} />;
    }

    default: {
      return null;
    }
  }
});
