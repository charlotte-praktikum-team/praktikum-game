import { useCallback, useRef, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { GameHeader } from './components/gameHeader/gameHeader';
import { useGameLoop } from './hooks/useGameLoop';
import { Flask } from './gameEntities/flask';
import { initFlaskList } from './utils/initFlaskList';

import './game.css';
import { GameConfig } from './utils/config';

const Game = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [flaskList, setFlaskList] = useState<Flask[]>(initFlaskList());
  const [isNewFlaskAdded, setIsNewFlaskAdded] = useState<boolean>(false);

  const { minutes, seconds, reset } = useStopwatch({ autoStart: true });
  const timer = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;

  const handleRefresh = () => {
    reset();
    setFlaskList(initFlaskList());
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddFlask = () => {
    if (isNewFlaskAdded) {
      return;
    }

    const lastFlask = flaskList[flaskList.length - 1];
    const emptyFlask = new Flask(lastFlask.x + GameConfig.flask.width + GameConfig.flasksGap, lastFlask.y);

    setIsNewFlaskAdded(true);
    setFlaskList([...flaskList, emptyFlask]);
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flaskList.forEach((flask) => flask.render(ctx));
    }
  }, [flaskList]);

  useGameLoop(render);

  return (
    <>
      <GameHeader timer={timer} onBack={handleBack} onRefresh={handleRefresh} onAddFlask={handleAddFlask} />

      <main className='game__wrapper'>
        <canvas width='800' height='700' ref={canvasRef} />
      </main>
    </>
  );
};

export default Game;
