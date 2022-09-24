import React from 'react';
import styled from 'styled-components';
import { ModalProps } from 'antd';
import { useTranslation } from 'react-i18next';

import Modal from 'components/atoms/Modal';

const StyledModal = styled(Modal)`
  .ant-modal-footer {
    border-top: unset;
  }
`;

type Props = ModalProps & {
  children?: React.ReactNode | React.ReactNode[];
};

function ModalConfirm(props: Props) {
  const { t }=useTranslation();
  const { children } = props;
  return (
    <StyledModal
      closable={false}
      okText={t('common.ok')}
      cancelText={t('common.cancel')}
      {...props}
    >
      {children}
    </StyledModal>
  );
}

export default ModalConfirm;
