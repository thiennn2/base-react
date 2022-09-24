import React, { useState } from 'react';
import classNames from 'classnames';
import history from 'utils/history';
import loadable from 'utils/loadable';
import type { MenuProps } from 'antd';
import { ROUTES } from 'routes';

import iconAvatar from 'assets/images/avatar.svg';

import styles from './styles.module.scss';

const Menu = loadable(() => import('components/atoms/Menu'));
const Svg = loadable(() => import('components/atoms/Svg'));

export default function SideNav() {
  const items = [
    {
      label: 'item 1',
      key: 'item-1',
      icon: <Svg src={iconAvatar} />,
    }, // remember to pass the key prop
    {
      label: 'item 2',
      key: 'item-2',
      icon: <Svg src={iconAvatar} />,
    }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
      icon: <Svg src={iconAvatar} />,
      children: [
        {
          label: 'item 3',
          key: 'submenu-item-1',
          icon: <Svg src={iconAvatar} />,
        }
      ],
    },
  ];

  const [selectedKey, setSelectedKey] = useState<React.Key | undefined>(1);

  const handleClick: MenuProps['onClick'] = ({ key, keyPath }) => {
    history.push(key);
  };

  const handleCollapse = () => {
    // handleCollapse
  };

  return (
    <div
      id="sideNav"
      className={classNames({
        [styles.sideNav]: true,
      })}
    >
      <Menu
        selectedKeys={[selectedKey]}
        defaultOpenKeys={[ROUTES.Home]}
        mode="inline"
        onClick={handleClick}
        items={items}
      />
    </div>
  );
}
