import { useState } from 'react';

import { ProfilePageWrapper } from '../components/profilePageWrapper/profilePageWrapper';
import { ProfileAvatar } from '../components/profileAvatar/profileAvatar';
import { ProfileModal } from '../components/profileModal/profileModal';

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <ProfilePageWrapper>
        <ProfileAvatar onClick={onToggleModal} />
      </ProfilePageWrapper>
      <ProfileModal isOpen={openModal} onClose={onToggleModal} />
    </>
  );
};

export default Profile;
