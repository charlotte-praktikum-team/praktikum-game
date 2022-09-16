import { Children, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { P, SmallText } from '@/components';
import { LevelOverview } from './components/levelOverview';
import { ACTIVE_LEVEL_NUMBER } from '@/utils/constants';
import { useAppDispatch, useAppSelector } from '@/store';
import { getLevels } from '@/store/dashboard/thunk';
import { selectCurrentLevelNumber, selectIsLoading, selectLevels } from '@/store/dashboard/selectors';
import './dashboard.css';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentLevelNumber = useAppSelector(selectCurrentLevelNumber);
  const levels = useAppSelector(selectLevels);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getLevels());
  }, []);

  const handleLevelClick = (number: number) => {
    localStorage.setItem(ACTIVE_LEVEL_NUMBER, number.toString());
    navigate('run');
  };

  return (
    <div className='dashboard__wrapper'>
      <div className='dashboard__description'>
        <P>
          Ball Sort Puzzle - игра-головоломка, которая подойдет для тренировки мозга и поможет скоротать время. Цель игры - как можно
          быстрее отсортировать разноцветные шарики в пробирках. Перемещать шарики можно в том случае, если они имеют один цвет и в пробирке
          достаточно места. Если вы застряли, то можно воспользоваться одной дополнительной пробиркой, но, в этом случае, вы получите меньше
          очков.
        </P>

        <SmallText classes='dashboard__hint'>
          Чтобы войти в полноэкранный режим, нажмите &quot;F&quot;. Чтобы выйти - &quot;F&quot; или &quot;Esc&quot;.
        </SmallText>
      </div>

      <div className='dashboard__levels-wrapper'>
        {!isLoading ? (
          Children.toArray(
            levels.map((level) => (
              <LevelOverview
                number={level.number}
                points={level.points}
                disabled={!level.isComplete && level.number !== currentLevelNumber}
                onClick={handleLevelClick}
              />
            ))
          )
        ) : (
          <P>Загрузка...</P>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
