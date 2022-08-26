import { ProfilePageTemplate } from '../components/profilePageTemplate/profilePageTemplate';
import { Link } from '@/components';
import { ProfileList } from '../components/profileList/profileList';
import { ProfileListItem } from '../components/profileListItem/profileListItem';
import { ProfileDataItem } from './components/profileDataItem/profileDataItem';

import './profile.css';
import { useAppSelector } from '@/store';
import { selectUser } from '@/store/user/selectors';
import { LABELS } from './types';

const Profile = () => {
  const { email, login, display_name, first_name, second_name, phone } = useAppSelector(selectUser);

  return (
    <ProfilePageTemplate title={`${first_name} ${second_name}`}>
      <ProfileList>
        <ProfileDataItem title={LABELS.EMAIL} text={email} />
        <ProfileDataItem title={LABELS.LOGIN} text={login} />
        <ProfileDataItem title={LABELS.FIRST_NAME} text={first_name} />
        <ProfileDataItem title={LABELS.SECOND_NAME} text={second_name} />
        <ProfileDataItem title={LABELS.DISPLAY_NAME} text={display_name!} />
        <ProfileDataItem title={LABELS.PHONE} text={phone} />
      </ProfileList>

      <ProfileList>
        <ProfileListItem>
          <Link href='/profile/user'>Изменить данные</Link>
        </ProfileListItem>
        <ProfileListItem>
          <Link href='/profile/password'>Изменить пароль</Link>
        </ProfileListItem>
      </ProfileList>
    </ProfilePageTemplate>
  );
};

export default Profile;
