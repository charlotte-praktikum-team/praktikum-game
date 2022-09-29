import React, { FC } from 'react';
import { LevelCompleteModalProps } from './types';
import './levelCompleteModal.css';
import { Button, Modal, P } from 'components';

export const LevelCompleteModal: FC<LevelCompleteModalProps> = ({ isOpen, isLastLevel, timer, points, onBack, onRefresh, onNext }) => (
  <Modal isOpen={isOpen} title='Победа!'>
    <div className='level-complete-modal__wrapper'>
      <div className='level-complete-modal__text-wrapper'>
        <P>
          Вы прошли уровень за {timer}. Заработанные очки - {points}.
        </P>
      </div>

      <div className='level-complete-modal__actions-wrapper'>
        <Button width='s' design='secondary' onClick={onRefresh}>
          Заново
        </Button>

        <Button width='s' design={isLastLevel ? 'primary' : 'secondary'} onClick={onBack}>
          На главную
        </Button>

        {!isLastLevel && (
          <Button width='s' onClick={onNext}>
            Дальше
          </Button>
        )}
      </div>
    </div>
  </Modal>
);
