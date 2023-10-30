import { createContext, useState } from "react";

export const TodoStore = createContext([]);

const TodoContext = ({ children }) => {
  //! Basic requirements
  const [todolist, setTodolist] = useState([]);

  // if we need changes , we will do while working on project
  const handleAddTodo = ({
    title,
    details,
    n_characters,
    n_sentences,
    n_words,
  }) => {
    console.log(title, details, n_characters, n_words, n_sentences);
    setTodolist([
      ...todolist,
      {
        id: `${new Date()}`,
        title,
        details,
        n_characters,
        n_words,
        n_sentences,
        createdAt: `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`,
      },
    ]);
  };
  const handleReadTodo = () => {};
  const handleDeleteTodo = () => {};
  const handleUpdateTodo = () => {};

  return (
    <TodoStore.Provider
      value={{
        todolist,
        handleAddTodo,
        handleDeleteTodo,
        handleReadTodo,
        handleUpdateTodo,
      }}
    >
      {children}
    </TodoStore.Provider>
  );
};

export default TodoContext;
