import React from 'react';

type Props = {
  /**
   * Additional class names to apply to the icon
   */
  className?: string;
};

const IconLocation: React.FC<Props> = ({ className = '' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23 23" className={className}>
    <path d="M11.6911445,6.57252031e-13 C13.9380141,6.57252031e-13 16.1856662,0.848347826 17.8995793,2.54582609 C21.3274054,5.94 21.0957532,11.2296522 17.8995793,14.8382609 C14.618101,18.5446957 12.868188,20.8565217 11.6911445,23.1793043 C10.5203619,20.8565217 8.7657532,18.5446957 5.48505755,14.8382609 C2.28888364,11.2296522 2.05644886,5.94 5.48505755,2.54582609 C7.19897059,0.848347826 9.44584016,6.57252031e-13 11.6911445,6.57252031e-13 Z M11.6911445,1.73895652 C9.80818799,1.73895652 8.03792712,2.46443478 6.70827494,3.78078261 C5.39505755,5.08069565 4.71418799,6.74295652 4.73923146,8.58913043 C4.76349233,10.4126087 5.49053581,12.222 6.78653581,13.6862609 C9.03966625,16.2305217 10.568101,18.1166087 11.6927097,19.7773043 C12.8220141,18.111913 14.348101,16.2266087 16.598101,13.6862609 C17.894101,12.222 18.6211445,10.4126087 18.6454054,8.58913043 C18.6688836,6.74295652 17.9880141,5.08069565 16.6763619,3.78078261 C15.3451445,2.46443478 13.5756662,1.73895652 11.6911445,1.73895652 Z M11.6922402,5.21538261 C13.6127619,5.21538261 15.168588,6.7719913 15.168588,8.69251304 C15.168588,10.6122522 13.6127619,12.1688609 11.6922402,12.1688609 C9.77171842,12.1688609 8.21510973,10.6122522 8.21510973,8.69251304 C8.21510973,6.7719913 9.77171842,5.21538261 11.6922402,5.21538261 Z M11.6922402,6.95355652 C10.7327619,6.95355652 9.95328364,7.73381739 9.95328364,8.69251304 C9.95328364,9.65042609 10.7327619,10.430687 11.6922402,10.430687 C12.6509358,10.430687 13.4304141,9.65042609 13.4304141,8.69251304 C13.4304141,7.73381739 12.6509358,6.95355652 11.6922402,6.95355652 Z" />
  </svg>
);

export default IconLocation;
