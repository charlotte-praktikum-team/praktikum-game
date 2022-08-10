import { AuthPageTemplate } from '@/pages/components/authPageTemplate/authPageTemplate';
import { AuthForm } from '@/pages/components/authForm/authForm';
import { InputProps } from '@/components/input/types';
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

const Login = () => (
  <AuthPageTemplate>
    <AuthForm
      title='Вход'
      inputs={inputs}
      formName='loginForm'
      submitButtonText='Войти'
      link={{ href: routes.register.path, children: 'Нет аккаунта?' }}
    />
  </AuthPageTemplate>
);

export default Login;
