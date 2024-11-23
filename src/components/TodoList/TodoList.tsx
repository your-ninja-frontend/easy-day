'use client';

import { useAppDispatch } from '@/store/hooks';
import { addTodo, changeDate, removeTodoList, TodoList as TodoListProps } from '@/store/rootSlice';
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon';
import InputText from '@/ui/Inputs/InputText/InputText';
import { randomColor } from '@/utils/randomColor';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import BaseDatePicker from '../DatePicker/DatePicker';
import { Todo } from '../Todo/Todo';
import TodoTitle from '../TodoTitle/TodoTitle';
import style from './style.module.scss';

const TodoList = ({ list }: { list: TodoListProps }) => {
  const [color, setColor] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initColor = randomColor();
    setColor(initColor);
  }, []);

  return (
    <li className={style.list} style={{ backgroundColor: color }}>
      <div className={style.wrapper}>
        <TodoTitle title={list.title} listId={list.listId} />
        <ButtonIcon
          className={style.button}
          iconPath='./icon-delete-list.svg'
          alt='Удалить список'
          onClick={() => dispatch(removeTodoList({ listId: list.listId }))}
        />
      </div>
      <BaseDatePicker
        className={style.date}
        date={list.date}
        onChange={(e) => {
          dispatch(
            changeDate({
              listId: list.listId,
              date: dayjs(e).format('DD.MM.YY')
            })
          );
        }}
      />
      <ul>
        {list.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} listId={list.listId} />
        ))}
      </ul>
      <InputText
        placeholder='Добавить задачу'
        onKeyDown={(e) => {
          let target = e.target as HTMLInputElement;
          if (e.code === 'Enter' && target.value) {
            dispatch(addTodo({ listId: list.listId, value: target.value }));
            target.value = '';
          }
        }}
      />
    </li>
  );
};

export default TodoList;
