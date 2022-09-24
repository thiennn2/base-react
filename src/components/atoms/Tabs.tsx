import React from 'react';
import { Tabs as TabsLib } from 'antd';
import type { TabsProps } from 'antd';

type Props = TabsProps & {
  children?: React.ReactNode | React.ReactNode[];
  ref?: any;
}

function Tabs(props: Props) {
  return (
    <TabsLib {...props} >
      {props?.children}
    </TabsLib>
  );
}

export const { TabPane } = TabsLib;
export default Tabs;
