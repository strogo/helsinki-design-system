import React from 'react';

import { IconProps } from '../Icon.interface';

const IconQuestionCircle: React.FC<IconProps> = ({ className = '', style = {} }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 12v2h-2v-2h2zm-.956-10.25c1.99 0 3.673 1.545 3.673 3.674 0 1.357-.47 2.065-1.556 2.882l-.242.178c-.744.545-.963.852-.98 1.658l-.002.108h-2c0-1.575.522-2.412 1.677-3.288l.248-.182c.706-.517.855-.726.855-1.356 0-.985-.75-1.674-1.673-1.674-.853 0-1.565.59-1.662 1.458l-.009.098-1.996-.114c.115-2.019 1.757-3.442 3.667-3.442z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconQuestionCircle;
