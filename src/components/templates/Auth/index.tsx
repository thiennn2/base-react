import React, { useMemo } from 'react';
import dashboard from 'assets/images/dashboard.svg';
import project from 'assets/images/project.svg';
import { useTranslation } from 'react-i18next';
import type { IMenu } from 'types/common';
import loadable from 'utils/loadable';

import styles from './styles.module.scss';

const Header = loadable(() => import('components/molecules/Header'));
const SideNav = loadable(() => import('components/molecules/Sidebar'));
const Svg = loadable(() => import('components/atoms/Svg'));


interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

function Auth(props: Props) {
  const { children = null } = props;
  const { t } = useTranslation();

  const menuLeft: IMenu[] = useMemo(() => [
    {
      key: '/',
      label: t('sideNav.dashboard'),
      icon: <Svg src={dashboard} />,
      url: '/',
    },
  ], [t]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainWrapper}>
        <Header />
        <div className={styles.coverContent}>
          <SideNav menus={menuLeft} />
          <div className={styles.pageContent} >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
