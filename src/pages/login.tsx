import React, { useEffect } from 'react';
import LoginForm from 'components/organisms/LoginForm';
import { getCookie } from 'utils/cookie';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'routes';

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      navigate(ROUTES.Home);
    }
  }, []);

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <LoginForm />
    </div>
  );
};

export default Login;
