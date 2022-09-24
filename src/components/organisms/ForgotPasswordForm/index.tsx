import React from 'react';
import Button from 'components/atoms/Button';
import QueryString from 'qs';
import logging from 'utils/logging';
import { Form, Input } from 'antd';
import { handleLogin } from 'utils/helper';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';


const ForgotPasswordForm: React.FC = () => {
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
      className={styles.forgotPasswordForm}
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
        ]}
      >
        <Input autoFocus autoComplete='off' />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className='w-100'>
          {t('Submit')}
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Link to={ROUTES.Login}>
          <Button type="ghost" htmlType="button" className='w-100'>
            {t('Back to login')}
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default ForgotPasswordForm;
