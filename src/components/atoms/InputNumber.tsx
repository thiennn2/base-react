import React from 'react';
import { InputNumber as InputNumberLib } from 'antd';

type Props = {
  className?: string;
  addonBefore?: React.ReactNode;
  defaultValue?: number | string;
  maxLength?: number;
  min?: number,
  max?: number,
  prefix?: string,
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  placeholder?: string,
  type?: string,
}

function InputNumber(props: Props) {
  return (
    <InputNumberLib {...props} />
  );
}

export default InputNumber;
