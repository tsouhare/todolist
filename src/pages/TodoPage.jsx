import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);

  const handleChange = (value) => {
    setInputValue(value);
  }; //設置監聽器 handleChange 監聽使用者輸入的內容 value，並使用 setInputValue 將 value 傳入做狀態的更新

  const handleAddTodo = () => {
    if (inputValue.length === 0) {
      return;
    } //確認使用者輸入是否為空值，空值直接return。不為空值則往下
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100, //給予隨機 id
          title: inputValue, //使用者輸入內容
          isDone: false, //預設剛輸入項目應是"未完成"
        },
      ];
    });
    setInputValue(''); //清空使用者剛剛輸入並新增好的內容於輸入框。
  };

  const handleKeyDown = () => {
    if (inputValue.length === 0) {
      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });

    setInputValue('');
  };

  const handleToggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  }; //設置監聽器，使被點擊的todo項目(以id確認)的isDone屬性改變為與原先相反(!表相反)

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }
        return { ...todo, isEdit: false };
      });
    });
  };

  const handleSave = ({ id, title }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            id,
            title,
            isEdit: false,
          };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const todoNumbers = todos.length;

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onSave={handleSave}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onDelete={handleDelete}
      />
      <Footer todoNumbers={todoNumbers} />
    </div>
  );
};

export default TodoPage;
