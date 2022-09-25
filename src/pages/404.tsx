import { Button, Result } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';

const PageNotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Result
      status="404"
      title="404"
      subTitle={t('Sorry, the page you visited does not exist.')}
      extra={(
        <Link to={ROUTES.Home}>
          <Button type="primary">{t('Back Home')}</Button>
        </Link>
      )}
    />
  );
};

export default PageNotFound;
