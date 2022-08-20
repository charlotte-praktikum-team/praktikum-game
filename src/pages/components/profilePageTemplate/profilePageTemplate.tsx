import { FC, useState } from 'react';

import './profilePageTemplate.css';
import { ProfilePageTemplateProps } from './types';

import { ProfileAvatar } from '../profileAvatar/profileAvatar';
import { ProfileModal } from '../profileModal/profileModal';
import { Heading } from '@/components';

export const ProfilePageTemplate: FC<ProfilePageTemplateProps> = ({ children, title }) => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <div className='profile-page-template'>
        <div className='profile-page-template__top'>
          <ProfileAvatar onClick={onToggleModal} />
          {title && (
            <Heading type='h1' size='m'>
              {title}
            </Heading>
          )}
        </div>
        {children}
      </div>
      <ProfileModal isOpen={openModal} onClose={onToggleModal} />
    </>
  );
};
