import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconSortDescending = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <path
        fill="currentColor"
        d="M5,3.5 L9.5,8 L8,9.5 L6,7.5 L6,20 L4,20 L4,7.5 L2,9.5 L0.5,8 L5,3.5 Z M23,17 L23,19 L11,19 L11,17 L23,17 Z M21,13 L21,15 L11,15 L11,13 L21,13 Z M19,9 L19,11 L11,11 L11,9 L19,9 Z M16,5 L16,7 L11,7 L11,5 L16,5 Z"
      />
    </g>
  </svg>
);
