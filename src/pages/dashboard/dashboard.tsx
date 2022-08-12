import { Children, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { P } from '@/components';
import { LevelOverview } from './components/levelOverview';
import { ACTIVE_LEVEL_NUMBER } from '@/utils/constants';
import { LEVELS_STUB } from './mock';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentLevelNumber = useMemo(() => LEVELS_STUB.find((level) => !level.isComplete)?.number ?? 1, [LEVELS_STUB]);

  const handleLevelClick = (number: number) => {
    localStorage.setItem(ACTIVE_LEVEL_NUMBER, number.toString());
    navigate('run');
  };

  return (
    <div className='dashboard__wrapper'>
      <P classes='dashboard__description'>
        Ball Sort Puzzle - игра-головоломка, которая подойдет для тренировки мозга и поможет скоротать время. Цель игры - как можно быстрее
        отсортировать разноцветные шарики в пробирках. Перемещать шарики можно в том случае, если они имеют один цвет и в пробирке
        достаточно места. Если вы застряли, то можно воспользоваться одной дополнительной пробиркой, но, в этом случае, вы получите меньше
        очков.
      </P>

      <div className='dashboard__levels-wrapper'>
        {Children.toArray(
          LEVELS_STUB.map((level) => (
            <LevelOverview
              number={level.number}
              points={level.points}
              disabled={!level.isComplete && level.number !== currentLevelNumber}
              onClick={handleLevelClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
