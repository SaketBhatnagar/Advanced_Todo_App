import { createContext, useState } from "react";

export const TodoStore = createContext([]);

const TodoContext = ({ children }) => {
  //! Basic requirements
  const [todolist, setTodolist] = useState([
    {
      id: `1`,
      title: "lksachkjhc",
      details: "dsvsdv",
      n_characters: 2,
      n_words: 3,
      n_sentences: 1,
      createdAt: `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`,
    },
  ]);
  const [showreadoverlay, setShowreadOverlay] = useState(false);
  const [showTodoData, setShowTodoData] = useState({});

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
  // control extra screen

  const handleReadOverlay = id => {
    console.log(id);
    const data = todolist.filter(value => value.id === id);
    setShowTodoData({ ...data[0] });
    setShowreadOverlay(true);
  };

  return (
    <TodoStore.Provider
      value={{
        todolist,
        handleAddTodo,
        handleDeleteTodo,
        handleReadTodo,
        handleUpdateTodo,
        handleReadOverlay,
        showTodoData,
        showreadoverlay,
        setShowreadOverlay,
      }}
    >
      {children}
    </TodoStore.Provider>
  );
};

export default TodoContext;
