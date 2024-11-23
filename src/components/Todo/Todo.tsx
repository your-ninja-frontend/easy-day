import { useAppDispatch } from '@/store/hooks';
import { changeTodoTitle, removeTodo, setTodoStatus } from '@/store/rootSlice';
import { ITodo } from '@/types/todos.types';
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon';
import { InputCheckbox } from '@/ui/Inputs/InputCheckbox/InputCheckbox';
import { useRef, useState } from 'react';
import style from './style.module.scss';

export const Todo = ({ todo, listId }: { todo: ITodo; listId: string }) => {
  const [editing, isEditing] = useState(false);
  const [value, setValue] = useState(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  return (
    <li className={style.task}>
      {!editing ? (
        <InputCheckbox
          title={todo.title}
          checked={todo.done}
          onChange={() => dispatch(setTodoStatus({ id: todo.id, done: !todo.done, listId: listId }))}
          className={style.checkbox}
        />
      ) : (
        <input
          className={style.changeInput}
          type='text'
          value={value}
          ref={inputRef}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      )}
      <div className={style.buttons}>
        {!editing ? (
          <ButtonIcon
            iconPath='./icon-pencil.svg'
            alt='Изменить задачу'
            onClick={() => {
              setValue(todo.title);
              isEditing(true);
              setTimeout(() => inputRef.current?.focus(), 100);
            }}
          />
        ) : (
          <ButtonIcon
            iconPath='./icon-check.svg'
            alt='Сохранить изменения'
            onClick={() => {
              isEditing(false);
              dispatch(changeTodoTitle({ title: value, id: todo.id, listId: listId }));
            }}
          ></ButtonIcon>
        )}

        <ButtonIcon
          iconPath='./icon-delete-task.svg'
          alt='Удалить задачу'
          onClick={() => {
            dispatch(removeTodo({ id: todo.id, listId: listId }));
          }}
        />
      </div>
    </li>
  );
};
