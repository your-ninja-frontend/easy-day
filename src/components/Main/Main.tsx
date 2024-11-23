'use client';

import Clock from '@/components/Clock/Clock';
import DateNow from '@/components/DateNow/DateNow';
import { useAppDispatch } from '@/store/hooks';
import { addList } from '@/store/rootSlice';
import { ButtonMain } from '@/ui/Buttons/ButtonMain/ButtonMain';
import { TodoBoard } from '../TodoBoard/TodoBoard';
import Weather from '../Weather/Weather';
import styles from './style.module.scss';

const Main = () => {
  const dispatch = useAppDispatch();

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Привет, работяга!</h2>
        <div className={styles.info}>
          <DateNow />
          <Clock />
          <Weather />
        </div>
      </section>
      <ButtonMain onClick={() => dispatch(addList())}>+ Добавить список</ButtonMain>
      <TodoBoard />
    </main>
  );
};

export default Main;
