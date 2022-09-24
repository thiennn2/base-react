import { BackTop } from 'antd';
import React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Global layout
 */
function Blank(props: Props) {
  return (
    <>
      {props.children}
      <BackTop />
    </>
  );
}

export default Blank;
