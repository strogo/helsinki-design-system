import React from 'react';

import { IconProps } from '../Icon.interface';

const IconEyeCrossed: React.FC<IconProps> = ({ className = '', style = {} }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.793 2.793l1.414 1.414-16.5 16.5-1.414-1.414 16.5-16.5zm-.147 5.095C20.806 8.99 21.923 10.36 23 12c-3.283 5-6.95 7.5-11 7.5a9.59 9.59 0 01-3.359-.605l1.602-1.602a7.53 7.53 0 001.59.205L12 17.5c2.951 0 5.75-1.704 8.425-5.302L20.57 12l-.145-.198A19.084 19.084 0 0018.233 9.3l1.413-1.412zM12 4.5c1.15 0 2.27.202 3.359.605l-1.601 1.602a7.53 7.53 0 00-1.591-.205L12 6.5c-2.951 0-5.75 1.704-8.425 5.302L3.43 12l.145.198c.722.97 1.452 1.803 2.192 2.502l-1.413 1.412C3.194 15.01 2.077 13.64 1 12c3.283-5 6.95-7.5 11-7.5zm3.976 7.06a4 4 0 01-4.417 4.417l4.417-4.418zM12 8c.149 0 .296.008.44.024l-4.416 4.417A4 4 0 0112 8z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconEyeCrossed;
