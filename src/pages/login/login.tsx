import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { AuthPageTemplate } from '@/pages/components/authPageTemplate/authPageTemplate';
import { AuthForm } from '@/pages/components/authForm/authForm';
import { InputProps } from '@/components';
import { LoginFormData } from '@/pages/login/types';
import { loginSchema, passwordSchema } from '@/utils/validation';
import { routes } from '@/router/routes';

const inputs: InputProps[] = [
  {
    name: 'login',
    label: 'Логин',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
  },
];

const initialValues = {
  login: '',
  password: '',
};

const validationSchema = Yup.object({
  login: loginSchema,
  password: passwordSchema,
});

const Login = () => {
  const onFormSubmit = (data: LoginFormData, helpers: FormikHelpers<LoginFormData>) => {
    console.log({ data });
    setTimeout(() => {
      helpers.setSubmitting(false);
      helpers.resetForm();
    }, 1500);
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
      />
    </AuthPageTemplate>
  );
};

export default Login;
