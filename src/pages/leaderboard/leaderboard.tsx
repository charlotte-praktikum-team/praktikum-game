import { useState, Children } from 'react';
import cn from 'classnames';

import { Heading, PageMeta } from '@/components';
import { LeaderboardRow } from './components/leaderboardRow/leaderboardRow';

import { LeaderboardColumn } from '@/pages/leaderboard/types';
import './leaderboard.css';
import { LEADERS_LIST } from './mock';

const Leaderboard = () => {
  const [activeColumn, setActiveColumn] = useState<LeaderboardColumn>('points');

  return (
    <div className='leaderboard'>
      <PageMeta title='Таблица лидеров' />
      <div className='leaderboard__wrapper leaderboard__wrapper_dark'>
        <div className='leaderboard__heading'>
          <Heading size='xl' type='h1'>
            Лидеры
          </Heading>
        </div>
      </div>
      <div className='leaderboard__wrapper leaderboard__wrapper_dark'>
        <div className='leaderboard__table-header'>
          <div
            className={cn('leaderboard__table-header-cell', 'leaderboard__table-header-cell_aside', {
              'leaderboard__table-header-cell_active': activeColumn === 'place',
            })}
            onClick={() => setActiveColumn('place')}
          >
            <Heading size='m' type='h3'>
              Место
            </Heading>
          </div>
          <div
            className={cn('leaderboard__table-header-cell', 'leaderboard__table-header-cell_center', {
              'leaderboard__table-header-cell_active': activeColumn === 'player',
            })}
            onClick={() => setActiveColumn('player')}
          >
            <Heading size='m' type='h3'>
              Игрок
            </Heading>
          </div>
          <div
            className={cn('leaderboard__table-header-cell', 'leaderboard__table-header-cell_aside', {
              'leaderboard__table-header-cell_active': activeColumn === 'points',
            })}
            onClick={() => setActiveColumn('points')}
          >
            <Heading size='m' type='h3'>
              Очки
            </Heading>
          </div>
        </div>
      </div>
      <div className='leaderboard__wrapper'>
        <div className='leaderboard__table'>{Children.toArray(LEADERS_LIST.map((leader) => <LeaderboardRow leaderItem={leader} />))}</div>
      </div>
    </div>
  );
};

export default Leaderboard;
