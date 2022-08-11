import { FormikHelpers } from 'formik';
import { AuthPageTemplate } from '@/pages/components/authPageTemplate/authPageTemplate';
import { AuthForm } from '@/pages/components/authForm/authForm';
import { routes } from '@/router/routes';
import { RegisterFormData } from './types';
import { initialValues, inputs, validationSchema } from './constants';

const Register = () => {
  const onFormSubmit = (data: RegisterFormData, helpers: FormikHelpers<RegisterFormData>) => {
    // Временно до подключения api
    console.log({ data });
    helpers.setSubmitting(false);
    helpers.resetForm();
  };

  return (
    <AuthPageTemplate isReversed>
      <AuthForm<RegisterFormData>
        formTitle='Регистрация'
        formName='registerForm'
        onSubmit={onFormSubmit}
        submitButtonText='Зарегистрироваться'
        inputs={inputs}
        initialValues={initialValues}
        validationSchema={validationSchema}
        link={{ href: routes.login.path, children: 'Уже зарегистрированы?' }}
        classes='slide-in-from-right'
      />
    </AuthPageTemplate>
  );
};

export default Register;
