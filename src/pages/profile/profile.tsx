import './profile.css';

import { ProfilePageTemplate } from '../components/profilePageTemplate/profilePageTemplate';
import { Link } from '@/components';
import { ProfileList } from '../components/profileList/profileList';
import { ProfileListItem } from '../components/profileListItem/profileListItem';

const Profile = () => (
  <ProfilePageTemplate title='Иван Иванов'>
    <ProfileList>
      <ProfileListItem>
        <div className='profile__data-item'>
          <span>Почта</span>
          <span className='profile__data-item-info'>pochta@yandex.ru</span>
        </div>
      </ProfileListItem>
      <ProfileListItem>
        <div className='profile__data-item'>
          <span>Логин</span>
          <span className='profile__data-item-info'>ivanivanov</span>
        </div>
      </ProfileListItem>
      <ProfileListItem>
        <div className='profile__data-item'>
          <span>Имя</span>
          <span className='profile__data-item-info'>Иван</span>
        </div>
      </ProfileListItem>
      <ProfileListItem>
        <div className='profile__data-item'>
          <span>Фамилия</span>
          <span className='profile__data-item-info'>Иванов</span>
        </div>
      </ProfileListItem>
      <ProfileListItem>
        <div className='profile__data-item'>
          <span>Имя в чате</span>
          <span className='profile__data-item-info'>Иван</span>
        </div>
      </ProfileListItem>
      <ProfileListItem>
        <div className='profile__data-item'>
          <span>Телефон</span>
          <span className='profile__data-item-info'>+7 (909) 967 30 30</span>
        </div>
      </ProfileListItem>
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

export default Profile;
