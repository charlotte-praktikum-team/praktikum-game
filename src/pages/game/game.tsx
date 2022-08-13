import { useRef } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { GameHeader } from './components/gameHeader/gameHeader';
import { useGameLoop } from './hooks/useGameLoop';

import './game.css';

const Game = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { minutes, seconds, reset } = useStopwatch({ autoStart: true });

  const timer = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;

  const handleRefresh = () => {
    reset();
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddFlask = () => {
    // add flask
  };

  useGameLoop((dt: number) => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');
    }
  });

  return (
    <>
      <GameHeader timer={timer} onBack={handleBack} onRefresh={handleRefresh} onAddFlask={handleAddFlask} />

      <main className='game__wrapper'>
        <canvas className='game__canvas' ref={canvasRef} />
      </main>
    </>
  );
};

export default Game;
