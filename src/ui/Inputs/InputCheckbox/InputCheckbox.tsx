'use client';

import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export const InputCheckbox = ({ className, title, ...props }: InputCheckboxProps) => (
  <label className={clsx(styles.checkbox, className)}>
    <input className={styles.input} type='checkbox' {...props} />
    <span className={styles.title}>{title}</span>
  </label>
);
