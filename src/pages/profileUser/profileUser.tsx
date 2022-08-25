import { ProfilePageTemplate } from '../components/profilePageTemplate/profilePageTemplate';
import { ProfileForm } from '../components/profileForm/profileForm';

import { ProfileUserFormData } from './types';
import { inputs, validationSchema } from './constants';
import { useAppDispatch, useAppSelector } from '@/store';
import { changeUser } from '@/store/user/slice';
import { selectIsLoading, selectUser } from '@/store/user/selectors';

const ProfileUser = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const { email, login, display_name, first_name, second_name, phone } = useAppSelector(selectUser);

  return (
    <ProfilePageTemplate>
      <ProfileForm<ProfileUserFormData>
        isLoading={isLoading}
        formName='profileUserForm'
        onSubmit={(values) => dispatch(changeUser(values))}
        inputs={inputs}
        initialValues={{
          email: email!,
          login: login!,
          display_name: display_name!,
          first_name: first_name!,
          second_name: second_name!,
          phone: phone!,
        }}
        validationSchema={validationSchema}
      />
    </ProfilePageTemplate>
  );
};

export default ProfileUser;
