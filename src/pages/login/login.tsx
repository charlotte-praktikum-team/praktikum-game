import { AuthPageTemplate } from '@/pages/components/authPageTemplate/authPageTemplate';
import { AuthForm } from '@/pages/components/authForm/authForm';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/router/routes';
import { LoginFormData } from './types';
import { initialValues, inputs, validationSchema } from './constants';
import { Button, Icon } from '@/components';
import { REDIRECT_URI } from '@/utils/constants';

const Login = () => {
  const { isLoading, serviceId, handleLogin } = useAuth();

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
      >
        {serviceId && (
          <Button
            design='yandex'
            type='link'
            href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${REDIRECT_URI}`}
          >
            <Icon name='yandex' /> Войти с Яндекс ID
          </Button>
        )}
      </AuthForm>
    </AuthPageTemplate>
  );
};

export default Login;
