import { useState, Children, useEffect } from 'react';
import cn from 'classnames';

import { Button, Heading, P } from '@/components';
import { LeaderboardRow } from './components/leaderboardRow/leaderboardRow';

import { LeaderboardColumn } from '@/pages/leaderboard/types';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectIsLoading, selectLeaderboardList } from '@/store/leaderboard/selectors';
import { getLeaderboard } from '@/store/leaderboard/thunk';
import { LEADERBOARD_PAGINATION_SIZE } from '@/utils/constants';
import { clearData } from '@/store/leaderboard/slice';
import './leaderboard.css';

const Leaderboard = () => {
  const dispatch = useAppDispatch();

  const [activeColumn, setActiveColumn] = useState<LeaderboardColumn>('points');
  const [cursor, setCursor] = useState(0);

  const leaderboardList = useAppSelector(selectLeaderboardList);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getLeaderboard(cursor));

    return () => {
      dispatch(clearData());
    };
  }, [cursor]);

  return (
    <div className='leaderboard'>
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
        <div className='leaderboard__table'>
          {Children.toArray(leaderboardList.map((leader) => <LeaderboardRow leaderItem={leader} />))}
        </div>

        {isLoading && <P>Загрузка</P>}

        {!isLoading && cursor + LEADERBOARD_PAGINATION_SIZE === leaderboardList.length && (
          <Button onClick={() => setCursor(cursor + LEADERBOARD_PAGINATION_SIZE)}>Загрузить еще</Button>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
