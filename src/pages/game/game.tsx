import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { GameHeader } from './components/gameHeader/gameHeader';

const Game = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <GameHeader timer={timer} onBack={handleBack} onRefresh={handleRefresh} onAddFlask={handleAddFlask} />

      <main>игра</main>
    </>
  );
};

export default Game;
