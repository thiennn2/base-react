import React, { useEffect } from 'react';
import { Modal as ModalLib } from 'antd';
import type { ModalProps } from 'antd';
import bodyScrollLock from 'utils/bodyScrollLock';

type Props = ModalProps & {
  children?: React.ReactNode | React.ReactNode[];
};

function Modal(props: Props) {

  useEffect(() => {
    if (props.visible) {
      bodyScrollLock.enable();
    } else {
      bodyScrollLock.disable();
    }
  }, [props.visible]);

  return (
    <ModalLib closable {...props}>
      {props?.children}
    </ModalLib>
  );
}

export default Modal;
