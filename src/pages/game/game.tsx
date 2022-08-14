import { useCallback, useEffect, useRef, useState, MouseEvent } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { GameHeader } from './components/gameHeader/gameHeader';
import { useGameLoop } from './hooks/useGameLoop';
import { Flask } from './gameEntities/flask';
import { initLevel } from './utils/initLevel';
import { gameConfig } from './utils/config';
import { routes } from '@/router/routes';
import { ACTIVE_LEVEL_NUMBER } from '@/utils/constants';

import './game.css';
import { getCursorPosition } from './utils/getCursorPosition';
import { Ball } from './gameEntities/ball';

const Game = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const level = localStorage.getItem(ACTIVE_LEVEL_NUMBER);

  const [flaskList, setFlaskList] = useState<Flask[]>(initLevel(level));
  const [isNewFlaskAdded, setIsNewFlaskAdded] = useState<boolean>(false);
  const [activeFlaskId, setActiveFlaskId] = useState<string>();

  const { minutes, seconds, reset } = useStopwatch({ autoStart: true });
  const timer = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;

  useEffect(() => {
    if (!level) {
      navigate(routes.game.path);
    }
  }, [level]);

  const handleRefresh = () => {
    reset();
    setFlaskList(initLevel(level));
  };

  const handleBack = () => {
    navigate(routes.game.path);
  };

  const handleAddFlask = () => {
    if (isNewFlaskAdded) {
      return;
    }

    const lastFlask = flaskList[flaskList.length - 1];
    const emptyFlask = new Flask(lastFlask.x + gameConfig.flask.width + gameConfig.grid.flasksGap, lastFlask.y);

    setIsNewFlaskAdded(true);
    setFlaskList([...flaskList, emptyFlask]);
  };

  const handleCanvasClick = (e: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const cursorPosition = getCursorPosition(canvas, e);

    const clickedFlask = flaskList.find(
      (flask) =>
        cursorPosition.x >= flask.x - gameConfig.flask.lineWidth / 2 &&
        cursorPosition.x <= flask.x + gameConfig.flask.width + gameConfig.flask.lineWidth / 2 &&
        cursorPosition.y >= flask.y &&
        cursorPosition.y <= flask.y + gameConfig.flask.height + gameConfig.flask.lineWidth / 2
    );

    if (!clickedFlask) {
      return;
    }

    if (activeFlaskId === clickedFlask.id) {
      clickedFlask.dropBall();
      setActiveFlaskId(undefined);
    } else if (activeFlaskId && activeFlaskId !== clickedFlask.id) {
      const activeFlask = flaskList.find((flask) => flask.id === activeFlaskId);

      if (
        (activeFlask?.getUpperBall()?.color === clickedFlask.getUpperBall()?.color && clickedFlask.hasSpace) ||
        !clickedFlask.getUpperBall()
      ) {
        clickedFlask.addBall(activeFlask?.popBall() as Ball);
        setActiveFlaskId(undefined);
      } else {
        activeFlask?.dropBall();
        clickedFlask.select();
        setActiveFlaskId(clickedFlask.id);
      }
    } else if (clickedFlask.getUpperBall()) {
      clickedFlask.select();
      setActiveFlaskId(clickedFlask.id);
    }
  };

  const render = useCallback(
    (dt: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');

      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        flaskList.forEach((flask) => flask.render(ctx, dt));
      }
    },
    [flaskList]
  );

  useGameLoop(render);

  return (
    <>
      <GameHeader timer={timer} onBack={handleBack} onRefresh={handleRefresh} onAddFlask={handleAddFlask} />

      <main className='game__wrapper'>
        <canvas width='800' height='700' ref={canvasRef} onClick={handleCanvasClick} />
      </main>
    </>
  );
};

export default Game;
