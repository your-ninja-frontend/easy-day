import { useAppDispatch } from '@/store/hooks';
import { changeListTitle } from '@/store/rootSlice';
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon';
import { useRef, useState } from 'react';
import style from './style.module.scss';

const TodoTitle = ({ title, listId }: { title: string; listId: string }) => {
  const [editing, isEditing] = useState(false);
  const [value, setValue] = useState(title);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={style.wrapper}>
      {editing ? (
        <>
          <input
            className={style.input}
            type='text'
            ref={inputRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <ButtonIcon
            iconPath='./icon-check.svg'
            alt='Сохранить изменения'
            onClick={() => {
              isEditing(false);
              dispatch(changeListTitle({ title: value, listId: listId }));
            }}
          ></ButtonIcon>
        </>
      ) : (
        <>
          <h2 className={style.title}>{title}</h2>
          <ButtonIcon
            iconPath='./icon-pencil.svg'
            alt='Изменить заголовок'
            onClick={() => {
              setValue(title);
              isEditing(true);
              setTimeout(() => inputRef.current?.focus(), 100);
            }}
          ></ButtonIcon>
        </>
      )}
    </div>
  );
};

export default TodoTitle;
