import React from 'react';
import { getFileName } from 'utils/helper';
import classnames from 'classnames';

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  displayName?: string;
  canTouch?: boolean;
}

function Svg(props: Props) {
  const { canTouch = true, ...restProps } = props;
  const alt = props.alt || props.displayName || getFileName(props?.src ?? '');
  return (
    <img
      {...restProps}
      alt={alt}
      className={classnames(
        props.className,
        {
          'cursor-pointer': canTouch,
        })}
    />
  );
}

Svg.displayName = 'Svg';

export default Svg;
