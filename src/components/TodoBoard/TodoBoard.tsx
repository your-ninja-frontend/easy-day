import { useAppSelector } from '@/store/hooks';
import TodoList from '../TodoList/TodoList';
import style from './style.module.scss';

export const TodoBoard = () => {
  const todoLists = useAppSelector((state) => state.rootState.todoLists);

  return (
    <ul className={style.board}>
      {todoLists.map((todoList) => (
        <TodoList key={todoList.listId} list={todoList} />
      ))}
    </ul>
  );
};
