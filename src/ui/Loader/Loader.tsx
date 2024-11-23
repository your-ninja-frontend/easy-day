import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './style.module.scss';

interface ILoader {
  width?: number;
  height?: number;
  className?: string;
}

const Loader: FC<ILoader> = ({ width, height, className }) => {
  return (
    <Image
      className={clsx(styles.loader, className)}
      src='./loader.svg'
      alt='Загрузка...'
      width={width || 20}
      height={height || 20}
    ></Image>
  );
};

export default Loader;
