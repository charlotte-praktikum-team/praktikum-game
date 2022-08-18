import { FC, useState } from 'react';

import { ProfileAvatar } from '../profileAvatar/profileAvatar';
import { ProfileModal } from '../profileModal/profileModal';

import './profilePageTemplate.css';
import { ProfilePageTemplateProps } from './types';

export const ProfilePageTemplate: FC<ProfilePageTemplateProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <div className='profile-page-template'>
        <ProfileAvatar onClick={onToggleModal} />
        {children}
      </div>
      <ProfileModal isOpen={openModal} onClose={onToggleModal} />
    </>
  );
};
