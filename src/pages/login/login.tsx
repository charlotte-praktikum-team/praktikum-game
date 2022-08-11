import { FormikHelpers } from 'formik';
import { AuthPageTemplate } from '@/pages/components/authPageTemplate/authPageTemplate';
import { AuthForm } from '@/pages/components/authForm/authForm';
import { routes } from '@/router/routes';
import { LoginFormData } from './types';
import { initialValues, inputs, validationSchema } from './constants';

const Login = () => {
  const onFormSubmit = (data: LoginFormData, helpers: FormikHelpers<LoginFormData>) => {
    // Временно до подключения api
    console.log({ data });
    helpers.setSubmitting(false);
    helpers.resetForm();
  };

  return (
    <AuthPageTemplate>
      <AuthForm<LoginFormData>
        formTitle='Вход'
        formName='loginForm'
        onSubmit={onFormSubmit}
        submitButtonText='Войти'
        inputs={inputs}
        initialValues={initialValues}
        validationSchema={validationSchema}
        link={{ href: routes.register.path, children: 'Нет аккаунта?' }}
        classes='slide-in-from-left'
      />
    </AuthPageTemplate>
  );
};

export default Login;
