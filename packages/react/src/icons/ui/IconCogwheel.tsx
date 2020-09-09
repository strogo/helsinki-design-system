import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconCogwheel = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M11.727 2c.964 0 1.783.502 2.146 1.335l.06.15.372 1.003c.041.167.163.29.329.331a.829.829 0 00.505-.013l.1-.042.826-.295c.831-.419 1.762-.381 2.408.14.864.62 1.184 1.676.856 2.678l-.057.157-.428.923a.567.567 0 000 .54c.07.14.162.232.32.324l.103.057 1.093.366c.826.277 1.47.965 1.602 1.756.19 1.02-.337 2-1.28 2.446l-.137.06-1.233.434a.446.446 0 00-.33.332.844.844 0 00.007.495l.038.09.425.855c.39.785.381 1.657-.048 2.3l-.091.124c-.637.899-1.706 1.243-2.66.872l-.142-.061-.993-.376a.557.557 0 00-.536 0c-.17.086-.288.197-.347.333l-.03.085-.308 1.056c-.312.815-1.001 1.397-1.865 1.52l-.164.019-.177.006a2.329 2.329 0 01-2.084-1.341l-.061-.145-.372-1.002a.446.446 0 00-.33-.331.826.826 0 00-.498.01l-.933.401c-.83.419-1.762.381-2.408-.14-.864-.62-1.183-1.676-.858-2.674l.057-.157.43-.988a.567.567 0 000-.54.735.735 0 00-.32-.324l-.102-.057-.911-.305a2.528 2.528 0 01-1.663-1.819c-.187-1.07.331-2.056 1.274-2.504l.138-.06.995-.374a.446.446 0 00.33-.332.844.844 0 00-.013-.509l-.042-.1-.29-.824c-.419-.774-.382-1.716.135-2.431.638-.899 1.707-1.243 2.67-.868l1.125.494a.557.557 0 00.537 0c.17-.086.287-.197.347-.333l.029-.085.307-1.05a2.372 2.372 0 011.959-1.594L11.727 2zm.002 1.75c-.23 0-.444.13-.546.361l-.032.092-.304 1.038a2.382 2.382 0 01-1.28 1.41 2.878 2.878 0 01-1.643.05l-.206-.061-.936-.474c-.304-.102-.583-.01-.68.099l-.025.036-.063.076c-.162.123-.228.349-.153.605l.035.098.486.98c.28.635.315 1.296.06 1.873-.238.54-.64.973-1.16 1.248l-.16.078-.924.371c-.273.079-.448.363-.448.643 0 .198.104.42.35.542l.1.04 1.03.306a2.37 2.37 0 011.393 1.27c.241.547.263 1.15.063 1.715l-.067.167-.477.96a.656.656 0 00.136.734c.175.177.374.253.63.13l.087-.049.98-.493a2.693 2.693 0 011.043-.197c.225 0 .396.032.79.132.526.177.97.61 1.262 1.183l.076.16.364.978c.06.184.162.29.3.347.1.041.193.052.34.052.23 0 .444-.13.546-.361l.033-.092.303-1.038a2.376 2.376 0 011.26-1.403 2.253 2.253 0 011.695-.067l.165.066.973.43c.196.099.367.072.563-.046l.155-.103.043-.062c.134-.21.17-.408.083-.622l-.532-1.072c-.255-.578-.306-1.177-.128-1.7l.06-.154c.176-.53.606-.978 1.175-1.272l.159-.076 1.134-.42c.298-.129.413-.32.413-.592a.525.525 0 00-.307-.494l-1.234-.394a2.37 2.37 0 01-1.392-1.27 2.301 2.301 0 01-.066-1.707l.065-.165.421-.97a.656.656 0 00-.135-.734c-.176-.176-.374-.252-.63-.13l-.088.05-.972.489c-.573.256-1.168.308-1.688.129l-.153-.061c-.525-.176-.97-.61-1.26-1.18l-.075-.158-.355-.894a.748.748 0 00-.652-.427zM12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 1.75A2.257 2.257 0 009.75 12 2.257 2.257 0 0012 14.25 2.257 2.257 0 0014.25 12 2.257 2.257 0 0012 9.75z"
        fill="currentColor"
      />
    </g>
  </svg>
);