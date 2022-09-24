import React from 'react';
import Button from 'components/atoms/Button';
import QueryString from 'qs';
import logging from 'utils/logging';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';
import { handleLogin } from 'utils/helper';
import { useTranslation } from 'react-i18next';

import styles from './index.module.scss';


const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const queryParams = QueryString.parse(window.location.search, { ignoreQueryPrefix: true });

  const onFinish = (values: any) => {
    handleLogin({ accessToken: 'FAKE' });
  };

  const onFinishFailed = (errorInfo: any) => {
    logging.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      className={styles.loginForm}
      labelCol={{ span: 8 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: t('validate.requiredEmail') },
          { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: t('validate.invalidEmail') },
        ]}
      >
        <Input autoFocus autoComplete='off' />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: t('validate.requiredPassword') }]}
      >
        <Input.Password autoComplete='new-password' />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {t('Submit')}
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="ghost" htmlType="button">
          <Link to={ROUTES.ForgotPassword}>
            {t('Forgot Password')}
          </Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
