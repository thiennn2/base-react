import React from 'react';
import Spin from 'components/atoms/Spin';

export default function Home() {
  return (
    <div className='d-flex w-100 h-100 justify-content-center align-item-center'>
      <Spin spinning className='mt-auto mb-auto' />
    </div>
  );
}
