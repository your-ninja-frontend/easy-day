import { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

const InputText = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} type='text' {...props}></input>;
};

export default InputText;
