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
import { getCursorPosition } from './utils/getCursorPosition';
import { Ball } from './gameEntities/ball';
import clickSoundSrc from '../../../assets/sounds/clickSound.ogg';
import { LevelCompleteModal } from './components/levelCompleteModal/levelCompleteModal';

import './game.css';
import { withFullScreen } from './providers/withFullScreen';

const Game = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clickSoundRef = useRef<HTMLAudioElement>(null);
  const [level, setLevel] = useState(Number(localStorage.getItem(ACTIVE_LEVEL_NUMBER)) || 0);
  const isLastLevel = Object.keys(gameConfig.levels).length === level;
  const [flaskList, setFlaskList] = useState<Flask[]>(initLevel(level));
  const [isNewFlaskAdded, setIsNewFlaskAdded] = useState<boolean>(false);
  const [activeFlaskId, setActiveFlaskId] = useState<string>();
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const { minutes, seconds, reset, pause } = useStopwatch({ autoStart: true });
  const timer = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;

  const handleRefresh = () => {
    reset();
    setFlaskList(initLevel(level));
    setPoints(0);
    setIsCompleteModalOpen(false);
    setIsNewFlaskAdded(false);
  };

  useEffect(() => {
    if (!level) {
      navigate(routes.game.path);
    }

    if (level !== Number(localStorage.getItem(ACTIVE_LEVEL_NUMBER))) {
      localStorage.setItem(ACTIVE_LEVEL_NUMBER, level.toString());
      handleRefresh();
    }
  }, [level]);

  const handleBack = () => {
    navigate(routes.game.path);
  };

  const handleNext = () => {
    setLevel(level + 1);
  };

  const checkLevelComplete = () => {
    const isComplete = flaskList.every(
      (flask) =>
        !flask.balls.length ||
        (flask.balls.length === gameConfig.flask.maxBalls && flask.balls.every((ball) => ball.color === flask.balls[0].color))
    );

    if (isComplete) {
      pause();

      const earnedPoints = Math.round(gameConfig.maxPoints / (minutes * 60 + seconds) / (isNewFlaskAdded ? 2 : 1));

      setPoints(earnedPoints);
      setIsCompleteModalOpen(true);

      // save points and time in the db
    }
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

  const playClickSound = () => {
    const clickSound = clickSoundRef.current;

    if (clickSound) {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }
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
    } else if (activeFlaskId) {
      const activeFlask = flaskList.find((flask) => flask.id === activeFlaskId);

      if (
        (activeFlask?.getUpperBall()?.color === clickedFlask.getUpperBall()?.color && clickedFlask.hasSpace) ||
        !clickedFlask.getUpperBall()
      ) {
        playClickSound();
        clickedFlask.addBall(activeFlask?.popBall() as Ball);
        setActiveFlaskId(undefined);
        checkLevelComplete();
      } else {
        playClickSound();
        activeFlask?.dropBall();
        clickedFlask.select();
        setActiveFlaskId(clickedFlask.id);
      }
    } else if (clickedFlask.getUpperBall()) {
      playClickSound();
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
        <audio ref={clickSoundRef} src={clickSoundSrc} />
        <LevelCompleteModal
          isOpen={isCompleteModalOpen}
          points={points}
          timer={timer}
          isLastLevel={isLastLevel}
          onBack={handleBack}
          onNext={handleNext}
          onRefresh={handleRefresh}
        />
      </main>
    </>
  );
};

export default withFullScreen(Game);
