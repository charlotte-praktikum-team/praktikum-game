import React, { FC, memo } from 'react';
import { IconProps } from './types';

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

export const Icon: FC<IconProps> = memo(({ design }) => {
  switch (design) {
    case 'arrow-left': {
      return <ArrowLeft />;
    }

    case 'balls': {
      return <Balls />;
    }

    case 'cross': {
      return <Cross />;
    }

    case 'flask': {
      return <Flask />;
    }

    case 'forum': {
      return <Forum />;
    }

    case 'leaderboard': {
      return <Leaderboard />;
    }

    case 'logout': {
      return <Logout />;
    }

    case 'plus': {
      return <Plus />;
    }

    case 'refresh': {
      return <Refresh />;
    }

    case 'user': {
      return <User />;
    }

    default: {
      return null;
    }
  }
});
