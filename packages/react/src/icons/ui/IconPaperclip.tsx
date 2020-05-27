import React from 'react';

import { IconProps } from '../Icon.interface';

const IconPaperclip: React.FC<IconProps> = ({ className = '', style = {} }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M16 7h2v9a6 6 0 01-11.996.225L6 16V6.5a4.5 4.5 0 018.995-.212L15 6.5V15a3 3 0 01-5.995.176L9 15V7h2v8a1 1 0 001.993.117L13 15V6.5a2.5 2.5 0 00-4.995-.164L8 6.5V16a4 4 0 007.995.2L16 16V7z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconPaperclip;
