import { ProfilePageTemplate } from '../components/profilePageTemplate/profilePageTemplate';
import { ProfileForm } from '../components/profileForm/profileForm';
import { PageMeta } from '@/components';

import { ProfileUserFormData } from './types';
import { inputs, validationSchema } from './constants';
import { useAppDispatch, useAppSelector } from '@/store';
import { changeUser } from '@/store/user/thunk';
import { selectIsLoading, selectUser } from '@/store/user/selectors';

const ProfileUser = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const { id, display_name, ...initialValues } = useAppSelector(selectUser);

  return (
    <ProfilePageTemplate>
      <PageMeta title='Изменить данные' />
      <ProfileForm<ProfileUserFormData>
        isLoading={isLoading}
        formName='profileUserForm'
        onSubmit={(values) => dispatch(changeUser(values))}
        inputs={inputs}
        initialValues={{ ...initialValues, display_name: display_name! }}
        validationSchema={validationSchema}
      />
    </ProfilePageTemplate>
  );
};

export default ProfileUser;
