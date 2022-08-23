import React from 'react';

import { P, Avatar } from '@/components';

import './leaderboardRow.css';
import { LeaderboardRowProps } from './types';

export const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ leaderItem }) => (
  <div className='leaderboard-row'>
    <div className='leaderboard-row-cell leaderboard-row-cell_aside'>
      <P>{leaderItem.place}</P>
    </div>
    <div className='leaderboard-row-cell leaderboard-row-cell_center'>
      <div className='leaderboard-row-cell__block'>
        <Avatar size='s' src={leaderItem.avatar} />
        <P>{leaderItem.name}</P>
      </div>
    </div>
    <div className='leaderboard-row-cell leaderboard-row-cell_aside'>
      <P>{leaderItem.points}</P>
    </div>
  </div>
);
