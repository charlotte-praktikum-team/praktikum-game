import { AuthPageTemplate } from '@/pages/components/authPageTemplate/authPageTemplate';
import { AuthForm } from '@/pages/components/authForm/authForm';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/router/routes';
import { LoginFormData } from './types';
import { initialValues, inputs, validationSchema } from './constants';

const Login = () => {
  const { isLoading, handleLogin } = useAuth();

  return (
    <AuthPageTemplate>
      <AuthForm<LoginFormData>
        isLoading={isLoading}
        formTitle='Вход'
        formName='loginForm'
        onSubmit={handleLogin}
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
