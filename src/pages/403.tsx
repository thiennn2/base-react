import React from 'react';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';

const Unauthorized: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Result
      status="403"
      title="403"
      subTitle={t('Sorry, you are not authorized to access this page.')}
      extra={(
        <Link to={ROUTES.Home}>
          <Button type="primary">{t('Back Home')}</Button>
        </Link>
      )}
    />
  );
};

export default Unauthorized;
