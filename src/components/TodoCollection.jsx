import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggleDone,
  onChangeMode,
}) => {
  //加入 props {todos 從外層代入很多的todo項目, onSave, onDelete, onToggleDone, onChangeMode,
  return (
    <div>
      {todos.map((todo) => {
        //用 map 渲染出所有todos的項目，使用資料內的 id 作為 key，讓 React 知道每一筆 todo
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onSave={({ id, title }) => onSave?.({ id, title })}
            onToggleDone={(id) => onToggleDone?.(id)}
            onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
            onDelete={(id) => onDelete?.(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
