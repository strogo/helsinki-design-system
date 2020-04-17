import React from 'react';

type Props = {
  /**
   * Additional class names to apply to the icon
   */
  className?: string;
};

const IconMenu: React.FC<Props> = ({ className = '' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" className={className}>
    <path d="M1.01301075,4.01419355 L22.9875806,4.01419355 L22.9875806,6.61634409 L1.01301075,6.61634409 L1.01301075,4.01419355 Z M1.01301075,17.7482258 L22.9875806,17.7482258 L22.9875806,20.3503763 L1.01301075,20.3503763 L1.01301075,17.7482258 Z M1.01301075,10.8815054 L22.9875806,10.8815054 L22.9875806,13.4836559 L1.01301075,13.4836559 L1.01301075,10.8815054 Z" />
  </svg>
);

export default IconMenu;
