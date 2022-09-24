import React from 'react';
import history from 'utils/history';
import loadable from 'utils/loadable';
import { Layout } from 'antd';
import { RootState, useAppSelector } from 'store';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';
import { handleLogout as logoutFn } from 'utils/helper';

import iconSearch from 'assets/images/search.svg';
import iconDetail from 'assets/images/detail.svg';
import iconNotification from 'assets/images/notification.svg';
import iconAvatar from 'assets/images/avatar.svg';

import styles from './styles.module.scss';

const Dropdown = loadable(() => import('components/atoms/Dropdown'));
const Svg = loadable(() => import('components/atoms/Svg'));
const { Header: LayoutHeader } = Layout;

export default function Header() {
  const { t } = useTranslation();
  const me = useAppSelector((state: RootState) => state.user.me);

  const handleLogout = () => {
    logoutFn();
  };

  const menu = [
    {
      key: '1',
      label: (
        <div onClick={handleLogout}>{t('header.logout')}</div>
      ),
    }
  ];

  return (
    <Layout className={styles.header}>
      <LayoutHeader className={styles.coverHeader}>
        <Link
          to={ROUTES.Home}
          className={`${styles.title} cursor-pointer`}
          tabIndex={0}
        >
          {t('header.title')}
        </Link>
        <div className={styles.info}>
          <Svg src={iconSearch} alt='icon search' className={styles.iconSearch} />
          <Svg src={iconDetail} alt='icon detail' className={styles.iconDetail} />
          <Svg src={iconNotification} alt='icon notification' className={styles.iconNotification} />
          <Dropdown menu={menu}>
            <div className={styles.coverInfo}>
              <div className={styles.avatar}>
                <Svg
                  src={iconAvatar}
                  alt='icon avatar'
                  className={styles.iconAvatar}
                />
              </div>
              <div className={styles.name}>{me?.username ?? ''}</div>
            </div>
          </Dropdown>
        </div>
      </LayoutHeader>
    </Layout>
  );
}
