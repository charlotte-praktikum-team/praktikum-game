import { AuthPageTemplate } from '@/pages/components/authPageTemplate/authPageTemplate';
import { AuthForm } from '@/pages/components/authForm/authForm';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/router/routes';
import { RegisterFormData } from './types';
import { initialValues, inputs, validationSchema } from './constants';

const Register = () => {
  const { isLoading, handleRegister } = useAuth();

  return (
    <AuthPageTemplate isReversed>
      <AuthForm<RegisterFormData>
        isLoading={isLoading}
        formTitle='Регистрация'
        formName='registerForm'
        onSubmit={handleRegister}
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
