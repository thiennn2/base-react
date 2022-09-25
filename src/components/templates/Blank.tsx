import { animated, useSpring } from '@react-spring/web';
import { BackTop } from 'antd';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Global layout
 */
function Blank(props: Props) {
  const { pathname } = useLocation();
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 600 },
  }));

  useEffect(() => {
    api.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
    return () => {
      api.stop();
    };
  }, [api, pathname]);

  return (
    <>
      <animated.div className='h-100' style={styles}>
        {props.children}
      </animated.div>
      <BackTop />
    </>
  );
}

export default Blank;
