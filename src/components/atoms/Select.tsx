import React from 'react';
import { Select as SelectLib } from 'antd';
import type { SelectProps } from 'antd';

type Props = SelectProps & {
  children?: React.ReactNode | React.ReactNode[];
  ref?: any;
}

function Select(props: Props) {
  return (
    <SelectLib
      getPopupContainer={(triggerNode) => triggerNode.parentElement}
      {...props}
    >
      {props?.children}
    </SelectLib>
  );
}

export const { Option } = SelectLib;
export default Select;
