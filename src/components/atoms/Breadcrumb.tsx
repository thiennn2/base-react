import React from 'react';
import { Breadcrumb as BreadcrumbAntd } from 'antd';
import type { BreadcrumbProps } from 'antd';

type Props = BreadcrumbProps & {
  children?: React.ReactNode | React.ReactNode[];
  ref?: any;
}

function Breadcrumb(props: Props) {
  return (
    <BreadcrumbAntd {...props}>
      {props?.children}
    </BreadcrumbAntd>
  );
}

export const { Item } = BreadcrumbAntd;
export default Breadcrumb;
