import React from 'react';

type Props = {
  /**
   * Additional class names to apply to the icon
   */
  className?: string;
};

const IconLock: React.FC<Props> = ({ className = '' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 23" className={className}>
    <path
      fillRule="nonzero"
      d="M2.824 9.109V5.322C2.824 2.66 5.14.5 8 .5c2.859 0 5.176 2.161 5.176 4.822V9.11h1.05c.98 0 1.774.858 1.774 1.911v9.568c0 1.056-.793 1.912-1.773 1.912H1.773C.794 22.5 0 21.642 0 20.588V11.02C0 9.965.793 9.11 1.773 9.11h1.05zm-.942 1.913v9.565h12.236v-9.565H1.882zm9.412-1.913V5.322c0-1.566-1.44-2.909-3.294-2.909-1.855 0-3.294 1.341-3.294 2.91v3.786h6.588zM7.06 14.642c0-.529.418-.957.941-.957.52 0 .941.425.941.957v2.87a.947.947 0 0 1-.941.956.946.946 0 0 1-.941-.956v-2.87z"
    />
  </svg>
);

export default IconLock;
