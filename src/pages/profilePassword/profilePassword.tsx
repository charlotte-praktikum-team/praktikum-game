import { ProfilePageTemplate } from '../components/profilePageTemplate/profilePageTemplate';
import { ProfileForm } from '../components/profileForm/profileForm';

import { ProfilePasswordFormData } from './types';
import { initialValues, inputs, validationSchema } from './constants';

const ProfilePassword = () => (
  <ProfilePageTemplate>
    <ProfileForm<ProfilePasswordFormData>
      isLoading={false}
      formName='profileUserForm'
      onSubmit={(values) => console.log(values)}
      inputs={inputs}
      initialValues={initialValues}
      validationSchema={validationSchema}
      successText=''
    />
  </ProfilePageTemplate>
);

export default ProfilePassword;
