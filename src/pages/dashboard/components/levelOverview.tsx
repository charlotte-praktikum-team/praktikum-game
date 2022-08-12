import { FC, memo } from 'react';
import cn from 'classnames';
import { LevelOverviewProps } from './types';
import { SmallText } from '@/components';

import './levelOverview.css';

export const LevelOverview: FC<LevelOverviewProps> = memo(({ number, disabled, points, onClick }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(number);
    }
  };

  return (
    <div className={cn('level-overview', { 'level-overview_disabled': disabled })} onClick={handleClick}>
      <SmallText>Уровень {number}</SmallText>

      {points && <SmallText size='xs'>Очки: {points}</SmallText>}
    </div>
  );
});
