import React, { FC, memo } from 'react';
import { Header } from 'pages/components/header/header';
import { Icon } from 'components';
import { GameHeaderProps } from './types';
import './gameHeader.css';

export const GameHeader: FC<GameHeaderProps> = memo(({ timer, onBack, onRefresh, onAddFlask }) => (
  <Header classes='game-header'>
    <div className='game-header__actions-wrapper'>
      <button className='game-header__button' onClick={onBack}>
        <Icon name='arrow-left' />
      </button>

      <button className='game-header__button' onClick={onRefresh}>
        <Icon name='refresh' />
      </button>
    </div>

    <span className='game-header__timer'>{timer}</span>

    <button className='game-header__button game-header__button_add-flask' onClick={onAddFlask}>
      <Icon name='plus' size='s' />

      <Icon name='flask' />
    </button>
  </Header>
));
