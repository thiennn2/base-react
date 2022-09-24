import React from 'react';
import { Popover as PopoverLib } from 'antd';
import type { PopoverProps } from 'antd';
import styles from './styles.module.scss';

interface Props extends PopoverProps {
  children: React.ReactNode
}


function Popover(props: Props) {
  return (
    <PopoverLib overlayClassName={styles.popover} {...props}>
      {props.children}
    </PopoverLib>
  );
}

export default Popover;
