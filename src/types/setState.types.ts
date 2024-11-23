import { SetStateAction } from 'react';

export type setState<T> = {
  (value: SetStateAction<T>): void;
  (value: SetStateAction<T>): void;
  (arg0: T): void;
};
